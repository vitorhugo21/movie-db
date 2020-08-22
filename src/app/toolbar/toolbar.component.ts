import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  searchMovieForm = new FormGroup({
    movie: new FormControl(''),
  });

  constructor(private router: Router) {}

  onSubmit(): void {
    this.router.navigate(['/searchMovie', this.movie.value]);
  }

  get movie(): AbstractControl {
    return this.searchMovieForm.controls.movie;
  }
}
