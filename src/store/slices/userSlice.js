import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  comments: [],
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    logout: (state) => {
      state.name = '';
      state.email = '';
      state.comments = [];
      state.isLoggedIn = false;
    },
  },
});

export const { setUserDetails, addComment, logout } = userSlice.actions;

export default userSlice.reducer;
