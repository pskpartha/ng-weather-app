import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SummaryItem, Temperature, Today } from '../_models/today';
import { Nextdays } from '../_models/nextdays';
import { WeatherData } from '../_models/weather';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  todaysDataUrl = "./assets/api-data/today.json";
  forecastDataUrl = './assets/api-data/next-5-days.json';

  constructor(private http: HttpClient) { }

  getTodaysData(unit: string): Observable<Today> {
    return this.http.get<any>(this.todaysDataUrl).pipe(map(responseData => this.transformToToday(responseData, unit)),
      catchError(error => {
        // Handle the error here
        console.error('An error occurred:', error);
        return throwError(() => error);
      })
    );
  }

  getForecastData(unit: string): Observable<Nextdays> {
    return this.http.get<any[]>(this.forecastDataUrl).pipe(map(responseData => this.transformToNextdays(responseData, unit)),
      catchError(error => {
        // Handle the error here
        console.error('An error occurred:', error);
        return throwError(() => error);
      })
    );
  }

  // Combine all API data fetches
  getAllData(unit: string): Observable<WeatherData> {
    return forkJoin({
      today: this.getTodaysData(unit),
      nextdays: this.getForecastData(unit)
    })
  }

  private transformToToday(data: any, unit: string): Today {
    return {
      icon: data.weather[0].icon,
      temperature: {
        unit: unit,
        current: data.main.temp,
        min: data.main.temp_min,
        max: data.main.temp_max,
      } as Temperature,
      date: data.dt,
      placeName: data.name,
      weatherBrief: data.weather[0].description,
      wind: {
        title: "Wind Speed",
        value: data.wind.speed,
        unit: "km/h",
        icon: 'wind'
      },
      humidity: {
        title: "Humidity",
        value: data.main.humidity,
        unit: "%",
        icon: 'humidity'
      },
      pressure: {
        title: "Pressure",
        value: data.main.pressure,
        unit: "hPa",
        icon: 'pressure'
      },
      visibility: {
        title: "Visibility",
        value: data.visibility,
        unit: "miles",
        icon: 'visibility'
      },
      sun: {
        rise: data.sys.sunrise,
        set: data.sys.sunset,
      }

    }
  }


  private transformToNextdays(data: any, unit: string): Nextdays {
    return data.list.map((item: any) => ({
      date: item.dt,
      weatherBrief: item.weather[0].description,
      icon: item.weather[0].icon,
      temperature: {
        unit: unit,
        current: item.main.temp,
        min: item.main.temp_min,
        max: item.main.temp_max,
      } as Temperature,
      wind: {
        title: "Wind Speed",
        value: item.wind.speed,
        unit: "km/h",
        icon: 'wind',
      } as SummaryItem
    }));
  }
}
