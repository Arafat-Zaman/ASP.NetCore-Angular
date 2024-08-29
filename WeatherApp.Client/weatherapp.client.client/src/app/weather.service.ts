import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://localhost:5001/weatherforecast'; // Adjust the port if necessary

  constructor(private http: HttpClient) { }

  getWeatherForecasts(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(this.apiUrl);
  }
}
