<?php

namespace App\Service;

use App\Entity\Orders;
use App\Repository\OrdersRepository;
use DateTime;
use Decimal\Decimal;
use Doctrine\ORM\EntityManagerInterface;

class ImportOrderService
{
    private EntityManagerInterface $entityManager;
    private OrdersRepository $ordersRepository;

    public function __construct(EntityManagerInterface $entityManager, OrdersRepository $ordersRepository)
    {
        $this->entityManager = $entityManager;
        $this->ordersRepository = $ordersRepository;
    }

    public function importOrder(array $order)
    {
        $validateOrderData = $this->validateOrderData($order);
        if ($validateOrderData['status']) {
            $orderObj = $this->getOrder($order['id']);
            if (is_null($orderObj->getId())) {
                $orderObj->setId($order['id']);
            }
            $OrderDate = $this->generateDateTimeFromString($order['date']);
            $lastModifiedDate = $this->generateDateTimeFromString($order['last_modified']);
            $orderObj->setOrderDate($OrderDate);
            $orderObj->setCustomer($order['customer']);
            $orderObj->setAddress($order['address1']);
            $orderObj->setCity($order['city']);
            $orderObj->setCountry($order['country']);
            $orderObj->setPostcode($order['postcode']);
            $orderObj->setAmount(new Decimal($order['amount']));
            $orderObj->setStatus($order['status']);
            $orderObj->setIsDeleted($order['status'] == 'Yes');
            $orderObj->setLastModified($lastModifiedDate);

            $this->ordersRepository->add($orderObj);
            return ['success' => true];
        } else {
            return ['success' => false, 'reason' => $validateOrderData['message']];
        }
    }

    public function validateOrderData(array $data)
    {
        $requiredKeys = ['id', 'date', 'customer', 'address1', 'city', 'postcode', 'country', 'amount', 'status', 'deleted', 'last_modified'];
        $missingKeys = array_diff($requiredKeys, array_keys($data));

        if (count($missingKeys) > 0) {
            return ['status' => false, 'message' => 'Missing keys: '. implode(',', $missingKeys)];
        } else {
            return ['status' => true, 'message' => ''];
        }
    }

    public function getOrder($id): Orders
    {
        return $this->ordersRepository->find($id) ?? new Orders();
    }

    public function generateDateTimeFromString(string $datetime)
    {
        return DateTime::createFromFormat('Y-m-d H:i:s', $datetime);
    }
}
