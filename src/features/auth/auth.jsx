import { createSlice } from "@reduxjs/toolkit"

let state 

if (localStorage.getItem('data') !== null && localStorage.getItem('data') !== '' && localStorage.getItem('data') !== undefined) {
  if (localStorage.getItem('data') === 'admin'){
    state = true
  } else {
    state =false
  }
} else {
  state =false
}

const initialState = {
  info: state
}


export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.info = action.payload
    },
  }
})

export const { setAuth } = auth.actions
export default auth.reducer