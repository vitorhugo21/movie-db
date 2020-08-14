import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Genre } from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.API_KEY;
  }

  getGenres(): Observable<Genre[]> {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`;

    return this.http.get<Genre[]>(url).pipe(pluck('genres'));
  }
}
