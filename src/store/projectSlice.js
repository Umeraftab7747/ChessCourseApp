import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	msgs: [],
	books: [],
	cart: [],
	mesg: {},
	buybooks: [],
};

export const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setBooks: (state, action) => {
			if (action.payload.books === null) {
				state.books = [];
			} else {
				state.books = action.payload.books;
			}
		},
		setBuyBooks: (state, action) => {
			if (action.payload.buybooks === null) {
				state.buybooks = [];
			} else {
				state.buybooks = action.payload.buybooks;
			}
		},
		setMsgs: (state, action) => {
			if (action.payload.msgs === null) {
				state.msgs = [];
			} else {
				state.msgs = action.payload.msgs;
			}
		},
		setCart: (state, action) => {
			if (action.payload.cart === null) {
				state.cart = [];
			} else {
				state.cart = action.payload.cart;
			}
		},
		setChat: (state, action) => {
			if (action.payload.mesg === null) {
				state.mesg = [];
			} else {
				state.mesg = action.payload.mesg;
			}
		},
	},
});

export const { setBooks, setMsgs, setCart, setChat, setBuyBooks } =
	projectSlice.actions;

export default projectSlice.reducer;
