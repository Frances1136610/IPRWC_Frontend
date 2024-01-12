import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navbarOpen = false;
  accountMenuOpen = false;
  isAdmin = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.isAdmin = this.isUserAdmin();
  }

  isUserAdmin(): boolean {
    if (this.userService.getUser() === null) {
      return false;
    } else {
      if(this.userService.getUser()._role.includes("ADMIN")){
        return true;
      } else {
        return false;
      }
    }
  }

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
