import { Genre } from './genre.interface';
import { TheMovieDbResponse } from './the-movie-db-response.interface';

export interface Movie {
  credits: {
    cast: Person[]
  };
  genre_ids?: number[];
  genres?: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  recommendations: TheMovieDbResponse;
  runtime: number;
  tagline: string;
  title: string;
  videos?: {
    results: Video[]
  }
  vote_average: number;
}

interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

interface Person {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}


