import { Component, OnInit } from '@angular/core';
import { ManagersService } from 'src/app/auth/managers.service';

@Component({
  selector: 'tcm-app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private managerServ: ManagersService) { }

  ngOnInit(): void {
  }
}
