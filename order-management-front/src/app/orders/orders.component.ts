import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-orders',
  template: `
    <form class="filter-form" (ngSubmit)="filterData()">
      <div class="form-row">
        <div class="form-group">
          <label for="customerName">Customer Name</label>
          <input type="text" name="customerName" id="customerName" [(ngModel)]="customerName">

          <label for="orderStatus">Order Status</label>
          <select id="orderStatus" name="orderStatus" [(ngModel)]="orderStatus">
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="in_production">In Production</option>
            <option value="cancelled" >Cancelled</option>
          </select>
        </div>
        <div class="form-group">
          <button type="submit" class="button">Filter</button>
          <button type="button" class="button" (click)="resetFilter()">Reset</button>
        </div>
      </div>
    </form>

    <div class="table-block">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Order Date</th>
            <th>Customer</th>
            <th>Address</th>
            <th>City</th>
            <th>Postcode</th>
            <th>Country</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Last Modified</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of pagedData">
            <td>{{ item.id }}</td>
            <td>{{ generateNiceDate(item.orderDate.date) }}</td>
            <td>{{ item.customer }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.city }}</td>
            <td>{{ item.postcode }}</td>
            <td>{{ item.country }}</td>
            <td>{{ item.amount }}</td>
            <td>
              <span class="status status-{{ item.status }}">{{ getStatus(item.status) }}</span>
            </td>
            <td>{{ generateNiceDate(item.orderDate.date)  }}</td>
            <td>
              <button class="cancel-order" *ngIf="item.status !== 'cancelled'" (click)="cancelRequest(item.id)">Cancel Order</button>
            </td>
          </tr>
        </tbody>
      </table>
      <app-pagination
          [currentPage]="currentPage"
          [totalPages]="totalPages"
          (pageChange)="onPageChange($event)"
      ></app-pagination>
    </div>

    <app-cancel-order-modal
        *ngIf="showCancelModal"
        (cancelConfirmed)="confirmCancelOrder()"
        (modalClosed)="closeCancelModal()"
    ></app-cancel-order-modal>
  `,
  styles: [
      `
        .table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #ddd; /* Add border */
        }

        .table th,
        .table td {
          padding: 15px;
          text-align: center;
        }

        .table th {
          background-color: #f8f9fa;
          font-weight: bold;
          color: #333;
          white-space: nowrap;
        }

        .table td {
          background-color: #fff;
          color: #555;
        }

        .table-striped tbody tr:nth-of-type(even) {
          background-color: #ababab;
        }

        .status {
          display: inline-block;
          min-width: 120px;
          color: #fff;
          padding: 6px 10px;
          border-radius: 20px;

        }

        .status-pending {
          background-color: #ffc107;
        }

        .status-in_production {
          background-color: #17a2b8;
        }

        .status-cancelled {
          background-color: #dc3545;
        }
        
        .cancel-order {
          padding: 6px;
          background-color: red;
          color: white;
          border-radius: 12px;
          border: none;
          font-weight: bold;
          transition: 0.5s;
          width: 120px;
        }

        .cancel-order:hover {
          background-color: #fff;
          color: red;
          border: 1px solid red;
          cursor: pointer;
        }

        .filter-form {
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .filter-form .form-row {
          display: flex;
          justify-content: space-between;
        }

        .filter-form .form-group {
          margin-right: 10px;
        }

        .filter-form label {
          font-weight: bold;
          margin-right: 5px;
        }
        
        .filter-form input[type="text"],
        .filter-form select {
          padding: 5px;
        }

        .filter-form button {
          padding: 5px 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .filter-form button[type="submit"] {
          background-color: #28a745;
          width: 200px;
          padding: 8px;
        }

        .filter-form button[type="button"] {
          background-color: #dc3545;
          width: 200px;
          padding: 8px;
          margin-left: 20px;
        }

      `
    ]
})
export class OrdersComponent implements OnInit{
  orders = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;
  customerName: string = '';
  orderStatus: string = '';
  showCancelModal = false;
  orderForDelete:string = '';

  ngOnInit() {
    this.loadData();
  }

  loadData = () => {
    const requestData = {
      customerName: this.customerName,
      orderStatus: this.orderStatus
    };

    axios.get('/api/orders', {params: requestData}).then(res => {
      this.orders = res.data.data;
      this.calculateTotalPages();
    });
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.orders.length / this.itemsPerPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  get pagedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.orders.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getStatus(status: string): string {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'in_production':
        return 'In Production';
      case 'cancelled':
        return 'Cancelled';
      default:
        return '';
    }
  }

  generateNiceDate(originalDate: string): string {
    const niceDate = new Date(originalDate);

    return niceDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }

  filterData() {
    this.loadData();
  }

  resetFilter() {
    this.customerName = '';
    this.orderStatus = '';
    this.filterData();
  }

  cancelRequest(orderId: any)  {
    this.orderForDelete = orderId;
    this.showCancelModal = true;
  }

  confirmCancelOrder() {
    axios.put('/api/cancel/order/'+ this.orderForDelete).then((res) => {
      if (res.status == 200) {
        this.closeCancelModal();
        this.filterData();
      } else {
        this.closeCancelModal();
        alert('failed to cancel order');
      }
    })
  }

  closeCancelModal() {
    this.showCancelModal = false;
    this.orderForDelete = '';
  }
}
