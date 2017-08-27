import { Directive, Input, HostListener } from '@angular/core'
import { Router } from '@angular/router'

@Directive({
  selector: '[routerLink]',
})

export class RouterLinkMockDirective {
  @Input() routerLink: Array < string >

  constructor(private router: Router) {}

  @HostListener('click')
  onClick() {
    this.router.navigate(this.routerLink)
  }
}
