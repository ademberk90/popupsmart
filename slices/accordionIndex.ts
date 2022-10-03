import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface AccordionIndexState {
  index: number
}

// Define the initial state using that type
const initialState: AccordionIndexState = {
    index: 1
}

export const accordionSlice = createSlice({
  name: 'accordion',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload
    }
  }
})

export const { setIndex } = accordionSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.accordion.index

export default accordionSlice.reducer