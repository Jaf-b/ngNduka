import { serverRoutes } from './app.routes.server';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './core/services/api.service';
import { FooterComponent } from './ui/shared/footer/footer.component';
import { ToolbarComponent } from './ui/shared/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, ToolbarComponent],
  template: `
    <app-toolbar></app-toolbar>
    <router-outlet />
    <app-footer></app-footer>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'ngDuka';
  private api = inject(ApiService);
}
