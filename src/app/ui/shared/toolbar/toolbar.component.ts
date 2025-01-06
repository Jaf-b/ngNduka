import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../../core/services/api.service';
@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  template: `
    <div class="max-width">
      <mat-toolbar>
        <span>ngDuka</span>
        <span class="spacer"></span>
        <div class="iconContainer">
          <mat-icon>shopping_cart</mat-icon>
          <span>panier({{ CardProductCount() }})</span>
        </div>
      </mat-toolbar>
    </div>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 0;
      }
      .iconContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 16px;
          font-weight: 500;
        }
      }
      mat-toolbar {
        background-color: white;
      }
    `,
  ],
})
export class ToolbarComponent {
  private api = inject(ApiService);
  CardProductCount = this.api.CardProduct;
}
