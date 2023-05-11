import { createSlice } from '@reduxjs/toolkit'

const jobSlice = createSlice({
  name: 'job',
  initialState: {
    data: [],
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload)
    },
    clearAll: (state) => {
      state.data = []
    },
    deleteFilterData: (state, action) => {
      const id = action.payload
      const deleteFilterVal = state.data.filter((data) => data.id !== id)
      state.data = deleteFilterVal
    },
  },
})

export default jobSlice.reducer
export const { addData, clearAll, deleteFilterData } = jobSlice.actions
