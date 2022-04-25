import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './Reducers/todoSlider';

export default configureStore({
  reducer: {
    todo: todoReducer
  }
})