import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aw-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  location: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSearch() {
    const location = this.location;
    if (location && location.length > 0) {
      this.router.navigate(['/'], {queryParams: {location}})
        .then(() => {
          this.location = '';
        });
    }
  }
}
