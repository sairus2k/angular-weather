import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleSearch(location) {
    console.log(location);
  }

}
