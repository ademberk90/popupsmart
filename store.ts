import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'
import accordion from "./slices/accordionIndex"
import modal from "./slices/modal"

const rootReducer = combineReducers({
  accordion,modal
})

// eslint-disable-next-line no-use-before-define
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']