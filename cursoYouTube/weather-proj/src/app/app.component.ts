import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { WeatherComponent } from './components/weather/weather.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-proj';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}
  }

