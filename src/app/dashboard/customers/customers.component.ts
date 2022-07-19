import { Component, OnInit } from '@angular/core';
import { ManagersService } from 'src/app/auth/managers.service';

@Component({
  selector: 'tcm-app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(public managerServ: ManagersService) { }

  ngOnInit(): void {
  }

}
