const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'user',
  initialState: {
      current:{},
      setting:{},
  },
  // chỉ định những hàng động
  reducers: {
  },
});

const { reducer } = userSlice;
export default reducer //default export
