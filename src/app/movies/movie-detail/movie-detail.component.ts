import { Component, OnInit } from '@angular/core'
import { MovieService } from "../movie.service"
import { Movie } from "../movie"
import { BASE_IMG_URL } from "../constants/images"

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.styl']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie

  BASE_IMG_URL = BASE_IMG_URL

  constructor (private movieService: MovieService) {
  }

  async getMovie (id: number): Promise<any> {
    return this.movieService.getMovie(id)
  }

  async ngOnInit () {
    console.info(123)
    this.movie = await this.getMovie(1)
    console.info(this.movie)
    console.info(BASE_IMG_URL)
  }

}
