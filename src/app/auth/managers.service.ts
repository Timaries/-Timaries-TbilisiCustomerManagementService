import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManagersService {
  manager: { username: string; password: string } = {
    username: 'Admin',
    password: 'admin',
  };
  isLoggedIn: boolean = false;
  constructor() {}

  login(username: string, password: string) {
    if (
      username === this.manager.username &&
      password === this.manager.password
    ) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    return false;
  }
}
