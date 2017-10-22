import {Component, OnInit} from '@angular/core'
import {MovieService} from '../movie.service'
import {Movie} from '../movie'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: Movie[]

  constructor(private movieService: MovieService) {
  }

  getMovies(): void {
    this.movieService
      .getMovies()
      .then(heroes => this.movies = heroes)
  }

  ngOnInit() {
    this.getMovies()
  }

}


