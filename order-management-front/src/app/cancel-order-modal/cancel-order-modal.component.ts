import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cancel-order-modal',
  template: `
    <!-- cancel-order-modal.component.html -->
    <div class="cancel-modal" (click)="closeModal()">
      <div class="cancel-modal-content">
        <h2 class="cancel-modal-title">Cancel Order</h2>
        <p class="cancel-modal-message">Are you sure you want to cancel this order?</p>
        <div class="cancel-modal-buttons">
          <button class="cancel-modal-button cancel" (click)="cancelOrder()">Yes</button>
          <button class="cancel-modal-button" (click)="closeModal()">No</button>
        </div>
      </div>
    </div>
  `,
  styles: [
      `
        /* cancel-order-modal.component.css */
        .cancel-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cancel-modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          max-width: 400px;
          text-align: center;
        }

        .cancel-modal-title {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .cancel-modal-message {
          font-size: 16px;
          margin-bottom: 20px;
        }

        .cancel-modal-buttons {
          display: flex;
          justify-content: center;
        }

        .cancel-modal-button {
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
          margin: 0 10px;
        }

        .cancel-modal-button.cancel {
          background-color: #e74c3c;
          color: #fff;
        }

        .cancel-modal-button.cancel:hover {
          background-color: #c0392b;
        }

      `
  ]
})
export class CancelOrderModalComponent {
  @Output() cancelConfirmed = new EventEmitter<void>();
  @Output() modalClosed = new EventEmitter<void>();

  cancelOrder() {
    this.cancelConfirmed.emit();
  }

  closeModal() {
    this.modalClosed.emit();
  }
}
