import { Component, OnInit } from '@angular/core'
import { MovieService } from '../movie.service'
import { GenreService } from '../genre.service'
import { Movie } from '../movie'
import { Genre } from "../genre"

@Component({
  selector: 'movies',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})

export class MoviesPageComponent implements OnInit {

  movies: Movie[]
  genres: Genre[]

  constructor (private movieService: MovieService, private genreService: GenreService) {
  }

  getMovies (): void {
    this.movieService
      .getMovies()
      .then(v => this.movies = v)
  }

  getGenres (): void {
    this.genreService
      .getGenres()
      .then(v => this.genres = v)
  }

  ngOnInit () {
    this.getMovies()
    this.getGenres()
  }

}


