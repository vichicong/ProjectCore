import { Component, OnInit, Input, HostBinding } from '@angular/core'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() @HostBinding('class.blocking') isBlocking = true
  @Input() small = false

  constructor() { }

  ngOnInit() {
  }

}
