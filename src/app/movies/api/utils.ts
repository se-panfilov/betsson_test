import {Map} from 'immutable'

export function processAction (actionsList: Object, state: Map<any, any> = Map(), action: Map<string, any>): Map<string, any> {
  // if (!actionsList || !action.type || !actionsList[action.type]) throw new Error(MESSAGE.UNKNOWN_ACTION_TYPE)
  if (!actionsList) return state
  if (!action) return state
  const type = action.get('type')
  if (!type) return state
  if (!actionsList[type]) return state
  return actionsList[type](state, action)
}
