import {Genre} from "./genre"

export class Movie {
  id: number
  key: string
  name: string
  description: string
  genres: Array<Genre>
  rate: string
  length: string
  img: string
}
