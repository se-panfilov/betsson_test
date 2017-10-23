import { Component, OnInit } from '@angular/core'
import { MovieService } from '../movie.service'
import { GenreService } from '../genre.service'
import { Movie } from '../movie'
import { Genre } from "../genre"
import { Storage } from "../../store/storage"
import { SET_GENRES_LIST, SET_MOVIES_LIST } from "../constants/actions"
import { GENRE_FILTER, GENRES_LIST, MOVIE_NAME_FILTER, MOVIES_LIST } from "../constants/storage"

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

  async getMovies (): Promise<any> {
    return this.movieService.getMovies()
  }

  async getGenres (): Promise<any> {
    return this.genreService.getGenres()
  }

  filterByField (obj: Movie, field: string, value: string) {
    if (!value) return obj
    return obj[field].toLowerCase().indexOf(value.toLowerCase()) > -1
  }

  filterByGenre (obj: Movie, value: Genre) {
    if (!value) return obj
    return obj.genres.includes(value)
  }

  handleStoreChange (moviesList: string, genresList: string, movieNameFilter: string, genreFilterStr: string) {
    const state = Storage.getState()
    const movies = state.MovieReducers.get(moviesList)
    const genres = state.MovieReducers.get(genresList)
    const nameFilter = state.MovieReducers.get(movieNameFilter)
    const genreFilter = state.MovieReducers.get(genreFilterStr)

    this.genres = genres.toJS()
    this.movies = movies.toJS()
      .filter(v => this.filterByField(v, 'name', nameFilter))
      .filter(v => this.filterByGenre(v, genreFilter))
  }

  async ngOnInit () {
    const movies = await this.getMovies()
    const genres = await this.getGenres()
    Storage.dispatch({type: SET_MOVIES_LIST, data: movies})
    Storage.dispatch({type: SET_GENRES_LIST, data: genres})
    Storage.subscribe(() => this.handleStoreChange(MOVIES_LIST, GENRES_LIST, MOVIE_NAME_FILTER, GENRE_FILTER))
  }

}


