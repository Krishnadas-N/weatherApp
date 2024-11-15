import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';
import { Subscription, takeUntil } from 'rxjs';
import { Weather } from '../model/weatherModel';
@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css',
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {
  weatherService = inject(WeatherApiService);
  weatherSubscription: Subscription | null = null;
  weatherData!: Weather;
  isUserOnline() {
    return navigator.onLine;
  }
  ngOnInit(): void {
    this.loadWeatherData();
  }
  loadWeatherData() {
    if (navigator.onLine) {
      this.weatherSubscription = this.weatherService.getWeatherData().subscribe({
        next: (data) => {
          this.weatherData = data.weatherData;
          this.weatherService.storeWeatherData('weatherData', this.weatherData);
        },
        error: (err) => alert(err.message),
      });
    } else {
      const offlineData = this.weatherService.getStoredWeatherData('weatherData');
      if (offlineData) this.weatherData = JSON.parse(offlineData);
    }
  }

  ngOnDestroy(): void {
    if (this.weatherSubscription) {
      this.weatherSubscription.unsubscribe();
    }
  }
  convertToTime(unixTimestamp: number): string {
    console.log(unixTimestamp);
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  getRainfall(): string {
    return this.weatherData?.rain?.['1h'] ? `${this.weatherData.rain['1h']} mm` : '0 mm';
  }
}
