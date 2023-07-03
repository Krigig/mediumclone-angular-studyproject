import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('limit') limitProps: number;
  @Input('url') urlProps: string;
  pagesCount: number;
  pages: number[];

  constructor(private utilsServise: UtilService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsServise.range(1, this.pagesCount);
  }
}
