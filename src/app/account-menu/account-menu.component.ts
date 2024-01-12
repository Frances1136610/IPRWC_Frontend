import { Component, EventEmitter, Output } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user-service";

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent {
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  onLogoutClick() {
    this.userService.destroyJWT();
    this.userService.destroyUser();
    this.router.navigateByUrl('/login');
  }
}
