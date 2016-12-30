import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  handleSearch(location) {
    this.errorMessage = {title: location, message: location};
  }

}
