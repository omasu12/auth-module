import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/useApi';

export const register = createAsyncThunk('user/register', async (payload) => {
  // call api to register
  const data = await userApi.register(payload);

  // save data to local storage
  localStorage.setItem('token_access', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
  },
  // chỉ định những hàng động
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer; //default export
