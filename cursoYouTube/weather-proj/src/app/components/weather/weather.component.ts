import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="weather">
      <h2>{{ weather.name }}</h2>
      <p>Temperatura: {{ weather.main.temp }}°C</p>
      <p>Descrição: {{ weather.weather[0].description }}</p>
    </div>
  `,
  styles: [
    `
      div {
        padding: 1rem;
      }
    `,
  ],
})
export class WeatherComponent implements OnChanges {
  @Input() city!: string;
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnChanges() {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe((data) => {
        this.weather = data;
      });
    }
  }
}
