import { Map } from 'immutable'
import {
  CLEAR_GENRE_FILTER, SET_GENRE_FILTER, SET_GENRES_LIST, SET_MOVIE_NAME_FILTER,
  SET_MOVIES_LIST
} from '../constants/actions'
import { GENRE_FILTER, GENRES_LIST, MOVIE_NAME_FILTER, MOVIES_LIST } from '../constants/storage'

const actions = {}
const dataKey = 'data'

actions[SET_MOVIES_LIST] = (state: Map<any, any>, action: Map<any, any>): Map<any, any> =>
  state.set(MOVIES_LIST, action.get(dataKey))

actions[SET_GENRES_LIST] = (state: Map<any, any>, action: Map<any, any>): Map<any, any> =>
  state.set(GENRES_LIST, action.get(dataKey))

actions[SET_GENRE_FILTER] = (state: Map<any, any>, action: Map<any, any>): Map<any, any> =>
  state.set(GENRE_FILTER, action.get(dataKey))

actions[CLEAR_GENRE_FILTER] = (state: Map<any, any>, action: Map<any, any>): Map<any, any> =>
  state.set(GENRE_FILTER, null)

actions[SET_MOVIE_NAME_FILTER] = (state: Map<any, any>, action: Map<any, any>): Map<any, any> =>
  state.set(MOVIE_NAME_FILTER, action.get(dataKey))

export default actions
