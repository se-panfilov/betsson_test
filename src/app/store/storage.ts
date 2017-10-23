import { fromJS } from 'immutable'
import Reducers from './reducers'
import { createStore } from 'redux'

export let Storage: any = null

export function initStorage (initialData: Object = {}): Object {
  initialData = fromJS(initialData)
  return createStore(Reducers, initialData)
}

export function setStorage (storage: Object) {
  Storage = storage
}
