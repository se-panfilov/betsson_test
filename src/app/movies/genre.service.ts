import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Genre} from './genre'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class GenreService {

  private baseUrl = 'http://localhost:3000'
  private genresUrl = 'genres'

  constructor(private http: Http) {
  }

  getGenres(): Promise<Genre[]> {
    return this.http.get(`${this.baseUrl}/${this.genresUrl}`)
      .toPromise()
      .then(response => response.json() as Genre[])
      .catch(this.handleError)
  }

 private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error)
  }

}
