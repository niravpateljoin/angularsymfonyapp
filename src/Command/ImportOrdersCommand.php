<?php

namespace App\Command;

use App\Service\ImportOrderService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ChoiceQuestion;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Finder\Finder;

class ImportOrdersCommand extends Command
{
    protected static $defaultName = 'app:import-orders';
    protected static $defaultDescription = 'This Command is used for import orders from JSON file,';

    private ImportOrderService $importOrderService;

    public function __construct(ImportOrderService $importOrderService)
    {
        parent::__construct();
        $this->importOrderService = $importOrderService;
    }

    protected function configure(): void
    {
        $this
            ->setDescription(self::$defaultDescription)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        // Prompt the user to select a file
        $finder = new Finder();
        // search all the files from public/Data directory
        $finder->files()->in(__DIR__.'/../../public/Data');
        $choices = [];

        foreach ($finder as $file) {
            $choices[] = $file->getRealPath();
        }

        $helper = $this->getHelper('question');
        $question = new ChoiceQuestion('Select a JSON file:', $choices);
        $question->setErrorMessage('Invalid file selection.');
        $filePath = $helper->ask($input, $output, $question);

        // Read the file contents
        $fileContents = file_get_contents($filePath);

        // Parse the JSON data
        $orders = json_decode($fileContents, true);

        if (!empty($orders)) {
            $progressBar = new ProgressBar($output, count($orders));
            $progressBar->start();

            // small delay to simulate processing time
            $sleepAfter = count($orders) * 1000;
            foreach ($orders as $order) {
                $progressBar->advance();
                $response = $this->importOrderService->importOrder($order);
                if (!$response['success']) {
                    $io->writeln('');
                    $io->writeln($response['reason']);
                    exit();
                }
                usleep($sleepAfter);
            }
            $progressBar->finish();
            $io->newLine();
        }
        return 0;
    }
}
