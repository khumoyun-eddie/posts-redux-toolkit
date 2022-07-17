import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Dude Lebrowski' },
  { id: '1', name: 'Margaret Lyan' },
  { id: '2', name: 'Mc Arthur Benn' },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
