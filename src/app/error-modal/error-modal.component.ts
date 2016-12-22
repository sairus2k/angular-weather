import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {
  @Input() errorMessage;

  constructor() { }

  ngOnInit() {
  }

}
