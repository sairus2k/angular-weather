import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OpenWeatherMapService {
  private OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d5a17281219749675b7897dce29931b3&units=metric';

  constructor(private http: Http) {
  }

  getTemp(location: string) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('q', location);
    return this.http
      .get(this.OPEN_WEATHER_MAP_URL, {search: params})
      .toPromise()
      .then(response => response.json().main.temp)
      .catch(response => Promise.reject(response.json()));
  }

}
