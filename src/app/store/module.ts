import {NgModule} from '@angular/core'
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store'
import {createLogger} from 'redux-logger'
// import {IAppState} from './model'
// import {rootReducer} from './reducers'

@NgModule({
  imports: [NgReduxModule],
  providers: [],
})

export class StoreModule {
//   constructor(public store: NgRedux<IAppState>,
//               devTools: DevToolsExtension) {
//     store.configureStore(
//       rootReducer,
//       {},
//       [createLogger(), ...rootEpics.createEpics()],
//       devTools.isEnabled() ? [devTools.enhancer()] : [])
//   }
}
