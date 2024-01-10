import { Injectable } from '@angular/core';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user')!);
  }

  getJWT():string {
    return localStorage.getItem('jwt')!;
  }

  setJWT(jwt: string): void {
    localStorage.setItem('jwt', jwt);
  }

  destroyJWT() {
    localStorage.removeItem('jwt');
  }
  destroyUser(){
    localStorage.removeItem('user')
  }
}
