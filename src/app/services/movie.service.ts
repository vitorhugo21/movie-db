import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.API_KEY;
  }

  getMovieDetails(movieId: number): Observable<Movie> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=en-US&append_to_response=videos,credits,recommendations`;

    return this.http.get<Movie>(url);
  }
}   
