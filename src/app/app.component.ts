import { Component } from '@angular/core';
import { FeaturesModule } from './features/features.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FeaturesModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'weedingpage-angelajairo';
}
