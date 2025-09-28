import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../../features/auth'
import wishlist from "@/features/wishlist/model/wishlistSlice"

export const store = configureStore({
  reducer: {
    fake: () => "lorem",
    auth: authSlice.reducer,
    bookmark: wishlist
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch