import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Movie } from './movie'
import 'rxjs/add/operator/toPromise'
import { BASE_URL, MOVIES } from './constants/endpoints'

@Injectable()
export class MovieService {


  constructor (private http: Http) {
  }

  getMovies (): Promise<Movie[]> {
    return this.http.get(`${BASE_URL}/${MOVIES}`)
      .toPromise()
      .then(response => response.json() as Movie[])
      .catch(this.handleError)
  }

  getMovie (id: number): Promise<Movie> {
    const url = `${BASE_URL}/${MOVIES}/${id}`
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Movie)
      .catch(this.handleError)
  }

  private handleError (error: any): Promise<any> {
    return Promise.reject(error.message || error)
  }
}
