import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Genre } from './genre'
import 'rxjs/add/operator/toPromise'
import { BASE_URL, GENRES } from './constants/endpoints'

@Injectable()
export class GenreService {

  constructor (private http: Http) {
  }

  getGenres (): Promise<Genre[]> {
    return this.http.get(`${BASE_URL}/${GENRES}`)
      .toPromise()
      .then(response => response.json() as Genre[])
      .catch(this.handleError)
  }

  private handleError (error: any): Promise<any> {
    return Promise.reject(error.message || error)
  }

}
