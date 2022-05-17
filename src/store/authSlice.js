import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuth: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.isAuth = action.payload.auth;
		},
	},
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
