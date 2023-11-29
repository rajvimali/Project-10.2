import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Components/Users/userSlice'

export const store = configureStore({
    reducer: {
        users: userReducer
    },
})
