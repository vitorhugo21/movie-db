import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./popular/popular.module').then((m) => m.PopularModule),
  },
  {
    path: 'actor',
    loadChildren: () =>
      import('./actor/actor.module').then((m) => m.ActorModule),
  },
  {
    path: 'genre',
    loadChildren: () =>
      import('./genre/genre.module').then((m) => m.GenreModule),
  },
  {
    path: 'movie',
    loadChildren: () =>
      import('./movie/movie.module').then((m) => m.MovieModule),
  },
  {
    path: 'searchMovie',
    loadChildren: () =>
      import('./search-movie/search-movie.module').then(
        (m) => m.SearchMovieModule
      ),
  },
  {
    path: 'topRated',
    loadChildren: () =>
      import('./top-rated/top-rated.module').then((m) => m.TopRatedModule),
  },
  {
    path: 'upcoming',
    loadChildren: () =>
      import('./upcoming/upcoming.module').then((m) => m.UpcomingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
