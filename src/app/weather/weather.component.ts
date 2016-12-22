import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  errorMessage: any = null;

  constructor() {
  }

  ngOnInit() {
  }

  handleSearch(location) {
    this.errorMessage = {title: location, message: location};
  }

}
