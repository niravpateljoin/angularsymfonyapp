import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="main">
          <app-navbar></app-navbar>
          <app-orders>
          </app-orders>
      </div>
  `,
  styles: []
})
export class AppComponent {}
