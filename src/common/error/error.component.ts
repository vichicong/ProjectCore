import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'common-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    window.document.body.className = 'theme-dark colorful-enabled single-page'
  }

}
