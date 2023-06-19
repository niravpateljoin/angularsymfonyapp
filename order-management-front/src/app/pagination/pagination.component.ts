import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <div class="pagination-container">
      <ul class="pagination">
        <li class="pagination-item" (click)="changePage(1)">
          <span class="pagination-link">First</span>
        </li>
        <li class="pagination-item" (click)="changePage(currentPage - 1)" [class.disabled]="currentPage === 1">
          <span class="pagination-link">Previous</span>
        </li>
        <li class="pagination-item" *ngFor="let page of pagesRange" (click)="changePage(page)"
          [class.active]="currentPage === page">
          <span class="pagination-link">{{ page }}</span>
        </li>
        <li class="pagination-item" (click)="changePage(currentPage + 1)" [class.disabled]="currentPage === totalPages">
          <span class="pagination-link">Next</span>
        </li>
        <li class="pagination-item" (click)="changePage(totalPages)">
          <span class="pagination-link">Last</span>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
    .pagination-container {
      display: flex;
      justify-content: right;
      width: 100%;
      margin-top: 20px;
    }

    .pagination {
      display: inline-flex;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .pagination-item {
      cursor: pointer;
      padding: 8px 12px;
      margin: 0 2px;
      background-color: #f2f2f2;
      border-radius: 30px;
    }

    .pagination-item:hover {
      background-color: #ddd;
    }

    .pagination-item.disabled {
      cursor: default;
      background-color: #ccc;
    }

    .pagination-item.disabled:hover {
      background-color: #ccc;
    }
    
    .pagination-link {
      color: #333;
    }
    
    .pagination-item.active {
      font-weight: bold;
      background-color: #007bff;
    }
    .pagination-item.active > .pagination-link {
      color: white;
    }
    `
  ]
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Output() pageChange = new EventEmitter<number>();

  get pagesRange(): number[] {
    const range = [];
    for (let i = 1; i <= this.totalPages; i++) {
      range.push(i);
    }
    return range;
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
}
