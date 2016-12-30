import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { AboutComponent } from './about/about.component';
import { ExamplesComponent } from './examples/examples.component';
import { WeatherMessageComponent } from './weather-message/weather-message.component';

const appRoutes: Routes = [
  {path: '', component: WeatherComponent},
  {path: 'about', component: AboutComponent},
  {path: 'examples', component: ExamplesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WeatherComponent,
    WeatherFormComponent,
    ErrorModalComponent,
    AboutComponent,
    ExamplesComponent,
    WeatherMessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
