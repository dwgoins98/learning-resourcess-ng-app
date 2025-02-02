import { Component, computed, inject } from '@angular/core';
import { LearningResourcesComponent } from "./learning-resources/learning-resources.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [LearningResourcesComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
