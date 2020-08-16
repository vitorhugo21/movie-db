import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Output() page = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onButtonClicked(newPageNumber: number): void {
    this.page.emit(newPageNumber);
  }
}
