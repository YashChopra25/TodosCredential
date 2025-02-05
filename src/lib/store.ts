import { configureStore } from '@reduxjs/toolkit'
import appSlice from './features/app-slice'

const store = configureStore({
    reducer: {
        appSlice
    }
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch