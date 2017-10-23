import { Map } from 'immutable'
import { SET_MOVIES_LIST } from '../constants/actions'
import { MOVIES_LIST } from '../constants/storage'

const actions = {}

actions[SET_MOVIES_LIST] = function (state: Map<string, any>, action: Map<string, any>): Map<string, any> {
  const data = action.get('data')
  return state.set(MOVIES_LIST, data)
}


export default actions
