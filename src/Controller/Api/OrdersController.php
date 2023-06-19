<?php

namespace App\Controller\Api;

use App\Entity\Orders;
use App\Repository\OrdersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrdersController extends AbstractController
{
    private OrdersRepository $ordersRepository;

    public function __construct(OrdersRepository $ordersRepository)
    {
        $this->ordersRepository = $ordersRepository;
    }

    /**
     * @Route("/api/orders", name="app_api_orders", methods={"GET"})
     */
    public function index(Request $request): JsonResponse
    {
        $filterArr = [];
        $filterArr['customerName'] = $request->query->get('customerName');
        $filterArr['orderStatus'] = $request->query->get('orderStatus');

        $orders = $this->ordersRepository->searchOrderByFilter($filterArr);

        return new JsonResponse([
            'status' => Response::HTTP_OK,
            'data' => $orders
        ]);
    }

    /**
     * @Route("/api/cancel/order/{id}", name="app_api_cancel_order", methods={"PUT"})
     */
    public function cancelOrder(Request $request, Orders $orders): JsonResponse
    {
        if ($orders instanceof Orders) {
            try {
                $orders->setStatus(Orders::ORDER_STATUS_CANCELLED);
                $this->ordersRepository->add($orders);
                return new JsonResponse([
                    'status' => Response::HTTP_OK
                ]);
            } catch (\Exception $exception) {
                return new JsonResponse([
                    'status' => Response::HTTP_INTERNAL_SERVER_ERROR
                ]);
            }
        }

        return new JsonResponse([
            'status' => Response::HTTP_NOT_FOUND
        ]);
    }
}
