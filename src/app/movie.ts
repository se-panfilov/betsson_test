type GenreType = 'action' | 'adventure' | 'biography' | 'comedy' | 'crime'
  | 'drama' | 'history' | 'mystery' | 'scifi' | 'sport' | 'thriller';

export class Movie {
  id: number
  key: string
  name: string
  description: string
  genres: Array<GenreType>
  rate: string
  length: string
  img: string
}
