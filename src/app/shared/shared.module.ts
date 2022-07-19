import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent],
  imports: [CommonModule, RouterModule, MaterialsModule, FormsModule],
  exports: [HeaderComponent, MaterialsModule, FormsModule, SideMenuComponent],
})
export class SharedModule {}
