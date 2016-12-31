import { Component, OnInit, OnDestroy } from '@angular/core';
import { OpenWeatherMapService } from '../open-weather-map.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aw-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  errorMessage: any = null;
  isLoading: boolean = false;
  location: string = '';
  temp: number = 0;

  constructor(private openWeatherMapService: OpenWeatherMapService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (queryParams: any) => {
        const location = queryParams['location'];
        if (location && location.length > 0) {
          this.router.navigate(['/']).then(() => {
            this.handleSearch(location);
          });
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
