import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { TodayComponent } from './today/today.component';
import { NextdaysComponent } from './nextdays/nextdays.component';
import { WeatherData } from '../../_models/weather';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TodayComponent, NextdaysComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  weatherData!: WeatherData;



  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadWeatherData();
  }

  loadWeatherData() {
    // In your component
    this.apiService.getAllData('Metric').subscribe({
      next: data => {
        console.log(data);
        this.weatherData = data;
      },
      error: error => {
        console.error('Failed to get today’s data:', error);
      }
    });
  }
}
