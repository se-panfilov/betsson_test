import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Movie } from './movie'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class MovieService {

  private baseUrl = 'http://localhost:3000'
  private moviesUrl = 'movies'

  constructor (private http: Http) {
  }

  getMovies (): Promise<Movie[]> {
    return this.http.get(`${this.baseUrl}/${this.moviesUrl}`)
      .toPromise()
      .then(response => response.json() as Movie[])
      .catch(this.handleError)
  }

  getMovie (id: number): Promise<Movie> {
    const url = `${this.baseUrl}/${this.moviesUrl}/${id}`
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Movie)
      .catch(this.handleError)
  }

  private handleError (error: any): Promise<any> {
    return Promise.reject(error.message || error)
  }
}
