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

export const login = createAsyncThunk('user/login', async (payload) => {
  // call api to register
  const data = await userApi.login(payload);

  // save data to local storage
  localStorage.setItem('token_access', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem('user')) || {},
    setting: {},
  },
  // chỉ định những hàng động
  reducers: {
    logout(state) {
      // remove local storage
      localStorage.removeItem('token_access');
      localStorage.removeItem('user');

      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer; //default export
