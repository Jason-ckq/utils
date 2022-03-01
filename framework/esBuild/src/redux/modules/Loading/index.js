import { createSlice } from "@reduxjs/toolkit";
const initialState = { loading: false };

// 全局加载
const LoadingSlice = createSlice({
  name: "LoadingSlice",
  initialState,
  reducers: {
    Loading(state) {
      state.loading = true;
    },
    Loaded(state) {
      state.loading = false;
    },
  },
});

export const { Loading, Loaded } = LoadingSlice.actions;

export default LoadingSlice.reducer;
