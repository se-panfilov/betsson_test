import { Map, fromJS } from 'immutable'
import { processAction } from './utils'
import actions from './actions'
import { Action } from './action.type'

export default function (state: Map<any, any> = Map(), action: Action): Map<any, any> {
  if (!action || !action.type) return state
  const immutableAction = fromJS(action)
  return processAction(actions, state, immutableAction)
}
