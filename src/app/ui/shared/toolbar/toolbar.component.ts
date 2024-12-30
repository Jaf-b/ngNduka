import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  template: `
    <div class="max-width">
      <mat-toolbar>
        <span>ngDuka</span>
        <span class="spacer"></span>
        <div>
          <mat-icon>shopping_cart</mat-icon>
          <span>panier(0)</span>
        </div>
      </mat-toolbar>
    </div>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 0;
      }
    `,
  ],
})
export class ToolbarComponent {}
