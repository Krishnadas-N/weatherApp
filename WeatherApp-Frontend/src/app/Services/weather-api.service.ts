import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../model/weatherModel';
import { catchError, Observable } from 'rxjs';

interface Api {
  success: boolean;
  weatherData: Weather;
  message: String;
}
@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private apiURL = `http://localhost:3000`;
  constructor(private http: HttpClient) {}
  getWeatherData(): Observable<Api> {
    return this.http.get<Api>(`${this.apiURL}/weather`);
  }

  getStoredWeatherData(key: string): string | null {
    return localStorage.getItem(key);
  }

  storeWeatherData(key: string, data: Weather): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
