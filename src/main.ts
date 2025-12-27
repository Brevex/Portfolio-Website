import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { SpeedInsightsService } from './app/services/speed-insights.service';

bootstrapApplication(App, appConfig)
  .then((appRef) => {
    // Initialize Speed Insights after the app is bootstrapped
    appRef.injector.get(SpeedInsightsService);
  })
  .catch((err) => console.error(err));
