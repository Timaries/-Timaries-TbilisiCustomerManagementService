import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private managerServ: ManagersService, private router: Router) {}

  showStatus = false;
  showSpinner = false;
  newday = new Date();

  ngOnInit(): void {}

  login() {
    this.showSpinner = true;
    this.showStatus = false
    setTimeout(() => {
      this.showSpinner = false;
      if (this.managerServ.login(this.username, this.password)) {
        this.router.navigate(['/dashboard']);
      }
      this.showStatus = true;
      return;
    }, 1000);
  }
}
