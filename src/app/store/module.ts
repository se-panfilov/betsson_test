import {NgModule} from '@angular/core'
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store'
import {createLogger} from 'redux-logger'
import {IAppState} from './model'
import {rootReducer} from './reducers'
import {RootEpics} from './epics'

@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics],
})

export class StoreModule {
  constructor(public store: NgRedux<IAppState>,
              devTools: DevToolsExtension,
              rootEpics: RootEpics,) {
    store.configureStore(
      rootReducer,
      {},
      [createLogger(), ...rootEpics.createEpics()],
      devTools.isEnabled() ? [devTools.enhancer()] : [])
  }
}
