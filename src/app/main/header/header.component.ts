import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { environment } from 'common/environments/environment'
import { SessionService } from 'common/core/session.service'
import { UserData } from 'common/types'

@Component({
  selector: 'organization-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  currentUser: UserData

  constructor(
    private session: SessionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentUser = this.session.userData
  }

  logout() {
    this.session.clear()
    window.location.href = environment.logoutUrl.replace('{redirectUri}', '')
  }

  goToProfile() {
    window.location.href = environment.profileUrl
  }

}
