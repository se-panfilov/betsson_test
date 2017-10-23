import {combineReducers} from 'redux'
import {composeReducers, defaultFormReducer} from '@angular-redux/form'
import {createAnimalAPIReducer} from '../animals/api/reducer'
import {ANIMAL_TYPES} from '../animals/model'

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    movies: createAPIReducer(ANIMAL_TYPES.ELEPHANT)
  }))
