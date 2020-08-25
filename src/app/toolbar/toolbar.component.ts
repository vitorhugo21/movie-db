import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() sidenav: boolean;
  @Output() sidenavChange = new EventEmitter<boolean>();

  searchMovieForm = new FormGroup({
    movie: new FormControl(''),
  });

  constructor(private router: Router) {
    router.events.subscribe((value: NavigationEnd) => {
      if (
        value instanceof NavigationEnd &&
        !value.url.includes(`/searchMovie`)
      ) {
        this.movie.setValue('');
      }
    });
  }

  onSubmit(): void {
    this.router.navigate(['/searchMovie', this.movie.value]);
  }

  get movie(): AbstractControl {
    return this.searchMovieForm.controls.movie;
  }

  openSidenav(): void {
    this.sidenavChange.emit(!this.sidenav);
  }
}
