import { Injectable } from '@angular/core';
import { injectSpeedInsights } from '@vercel/speed-insights';

/**
 * Speed Insights Service
 * 
 * This service initializes Vercel Speed Insights for the Angular application.
 * It uses the `injectSpeedInsights` function from the @vercel/speed-insights package
 * to automatically add the tracking script to the app.
 */
@Injectable({
  providedIn: 'root',
})
export class SpeedInsightsService {
  constructor() {
    // Initialize Speed Insights when the service is instantiated
    this.initializeSpeedInsights();
  }

  /**
   * Initialize Speed Insights
   * This function injects the Speed Insights tracking script into the application.
   * It should be called once when the application starts.
   */
  private initializeSpeedInsights(): void {
    // Ensure we're in the browser environment before initializing
    if (typeof window !== 'undefined') {
      try {
        injectSpeedInsights();
      } catch (error) {
        console.error('Failed to initialize Speed Insights:', error);
      }
    }
  }
}
