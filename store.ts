import { configureStore } from '@reduxjs/toolkit'
import test from "./slices/test"
import accordion from "./slices/accordionIndex"
import modal from "./slices/modal"

export const store = configureStore({
  reducer: {
    accordion,
    modal
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch