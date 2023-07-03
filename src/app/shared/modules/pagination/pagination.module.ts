import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilService } from '../../services/utils.service';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [UtilService],
})
export class PaginationModule {}
