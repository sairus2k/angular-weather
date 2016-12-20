import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aw-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent {
  @Output() onSearch = new EventEmitter<string>();
  location: string;

  onFormSubmit() {
    if (this.location.length > 0) {
      this.onSearch.emit(this.location);
      this.location = '';
    }
  }

}
