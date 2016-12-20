import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aw-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  location: string;

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit() {
    const location = this.location;
    if (location.length > 0) {
      this.location = '';
      this.onSearch.emit(location);
    }
  }

}
