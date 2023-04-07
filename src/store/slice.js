import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'state',
  initialState: {
    userInfo: '',
    customers: '',
    searchValue: '',
    menu: false,
  },
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setCustomers(state, action) {
      state.customers = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setMenu(state, action) {
      state.menu = action.payload;
    },
  },
});

export default slice.reducer;
export const { setUserInfo, setCustomers, setSearchValue, setMenu } =
  slice.actions;
