import { Component, OnInit } from '@angular/core';
import { Genre } from '../interfaces/genre.interface';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    this.genreService.getGenres().subscribe((genres: Genre[]) => {
      this.genres = genres;
    });
  }
}
