import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../open-weather-map.service';

@Component({
  selector: 'aw-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  errorMessage: any = null;
  isLoading: boolean = false;
  location: string = '';
  temp: number = 0;

  constructor(private openWeatherMapService: OpenWeatherMapService) {
  }

  ngOnInit() {
  }

  handleSearch(location) {
    this.location = location;
    this.isLoading = true;
    this.openWeatherMapService
      .getTemp(location)
      .then(temp => {
        this.temp = temp;
        this.isLoading = false;
      })
      .catch(() => {
        this.errorMessage = 'The city not found';
        this.isLoading = false;
      });
  }

}
