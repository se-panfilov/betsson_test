import { Map } from 'immutable'
import { SET_GENRE_FILTER, SET_MOVIES_LIST } from '../constants/actions'
import { MOVIE_GENRE_FILTER, MOVIES_LIST } from '../constants/storage'

const actions = {}

actions[SET_MOVIES_LIST] = function (state: Map<any, any>, action: Map<any, any>): Map<any, any> {
  const data = action.get('data')
  return state.set(MOVIES_LIST, data)
}

actions[SET_GENRE_FILTER] = function (state: Map<any, any>, action: Map<any, any>): Map<any, any> {
  const data = action.get('data')
  return state.set(MOVIE_GENRE_FILTER, data)
}

export default actions
