import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Genre } from '../interfaces/genre.interface';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() sidenav: boolean;
  @Output() sidenavChange = new EventEmitter<boolean>();
  genres: Genre[] = [];

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    this.genreService.getGenres().subscribe((genres: Genre[]) => {
      this.genres = genres;
    });
  }

  closeSidenav(): void {
    this.sidenavChange.emit(!this.sidenav);
  }
}
