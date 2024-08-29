import { Component, OnInit } from '@angular/core';
import { WeatherService, WeatherForecast } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  forecasts: WeatherForecast[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherForecasts().subscribe(data => {
      this.forecasts = data;
    });
  }
}
