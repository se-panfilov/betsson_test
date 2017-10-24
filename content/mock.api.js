const genres = require('./genres')
const movies = require('./movie.mock-data.js')

module.exports = () => ({
  genres: Object.keys(genres).map(v => genres[v]),
  movies
})
