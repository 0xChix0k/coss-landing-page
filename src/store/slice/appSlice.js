import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    tabId: 'anchor1',
    dropdownOpen: false,
  },
  reducers: {
    setTabId: (state, action) => {
      state.tabId = action.payload;
    },
    setDropdownOpen: (state, action) => {
      state.dropdownOpen = action.payload;
    },
  },
});

export default appSlice.reducer;
export const selectApp = (state) => state.app;

export const { setTabId, setDropdownOpen } = appSlice.actions;
