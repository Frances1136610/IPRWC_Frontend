import { Component } from '@angular/core';
import {UserService} from "../services/user-service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  navbarOpen = false;
  accountMenuOpen = false;

  constructor(private userService: UserService) {
  }

  isUserAdmin(role: string): boolean {
    console.log(this.userService.getUser());
    console.log(role)
    return role === 'ADMIN';
  }

  isAdmin: boolean = this.isUserAdmin(this.userService.getUser()._role);

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleAccountMenu() {
    this.accountMenuOpen = !this.accountMenuOpen;
  }

  logout() {
    window.location.href = '/login';
  }
}
