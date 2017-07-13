import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-weather-message',
  templateUrl: './weather-message.component.html',
  styleUrls: ['./weather-message.component.scss']
})
export class WeatherMessageComponent implements OnInit {
  @Input() location = '';
  @Input() temp = '';

  constructor() { }

  ngOnInit() {
  }

}
