import {
	createSlice,
	createEntityAdapter,
	createAsyncThunk,
} from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const loginAdapter = createEntityAdapter();

const initialState = loginAdapter.getInitialState({
	authLoadingStatus: 'idle',
	isLoggedIn: false,
	isOpenLoginMenu: false,
});

export const login = createAsyncThunk(
	'login/userAuthorization',
	async (body) => {
		try {
			const response = await fetch(`${BASE_URL}/login`, {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (!response.ok) {
				throw new Error('error');
			}

			const data = await response.json();

			return data;
		} catch (e) {
			throw e;
		}
	}
);

export const updateData = createAsyncThunk(
	'login/userUpdateData',
	async (body) => {
		try {
			const response = await fetch(`${BASE_URL}/student/updateData`, {
				method: 'PUT',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (!response.ok) {
				throw new Error('error');
			}

			const data = await response.json();

			return data;
		} catch (e) {
			throw e;
		}
	}
);

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		clearLoadingStatus: (state) => {
			state.authLoadingStatus = 'idle';
		},
		setLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload;
		},
		setOpenedLoginMenu: (state, action) => {
			state.isOpenLoginMenu = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.authLoadingStatus = 'loading';
			})
			.addCase(login.fulfilled, (state) => {
				state.authLoadingStatus = 'idle';
			})
			.addCase(login.rejected, (state) => {
				state.authLoadingStatus = 'error';
			})
			.addDefaultCase(() => {});
	},
});

const { reducer, actions } = loginSlice;

export const { clearLoadingStatus, setLoggedIn, setOpenedLoginMenu } = actions;

export default reducer;
