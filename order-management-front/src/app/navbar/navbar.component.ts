import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar">
      <div class="logo">
        <span class="logo-text">Order Management App</span>
      </div>
      <ul class="nav-menu">
        <li class="nav-item">
          <a class="nav-link" (click)="refreshPage()">Home</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [
      `.navbar {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #dcdada;
      }

      .logo {
        margin-right: 20px;
      }

      .logo-text {
        font-size: 20px;
        font-weight: bold;
        color: #4b4d4b;
      }

      .nav-menu {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      .nav-item {
        display: inline-block;
        margin-right: 10px;
      }

      .nav-link {
        text-decoration: none;
        color: #333;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #ddd;
      }

      .nav-link:hover {
        background-color: #bbb;
        cursor: pointer;
      }`
  ]
})
export class NavbarComponent {

  refreshPage() {
    location.reload();
  }
}
