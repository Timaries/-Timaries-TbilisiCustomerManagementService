import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@NgModule({
  imports: [CommonModule, MatInputModule, MatProgressSpinnerModule],
  exports: [MatInputModule, MatProgressSpinnerModule],
})
export class MaterialsModule {}
