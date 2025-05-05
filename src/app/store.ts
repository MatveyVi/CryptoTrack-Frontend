import { configureStore } from '@reduxjs/toolkit'
// import { yourReducer } from '../features/yourFeature/yourSlice'

export const store = configureStore({
  reducer: {
    // yourFeature: yourReducer
  },
  //middleware: (getDefaultMiddleware) =>
    //getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
