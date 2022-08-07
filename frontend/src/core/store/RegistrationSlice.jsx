import {
	createSlice,
	createEntityAdapter,
	createAsyncThunk,
} from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const registrationAdapter = createEntityAdapter();

const initialState = registrationAdapter.getInitialState({
	registrationLoadingStatus: 'idle',
});

export const registration = createAsyncThunk(
	'registration/userRegistration',
	async (body) => {
		try {
			const response = await fetch(`${BASE_URL}/registration`, {
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

const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		clearLoadingStatus: (state) => {
			state.registrationLoadingStatus = 'idle';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registration.pending, (state) => {
				state.registrationLoadingStatus = 'loading';
			})
			.addCase(registration.fulfilled, (state) => {
				state.registrationLoadingStatus = 'idle';
			})
			.addCase(registration.rejected, (state) => {
				state.registrationLoadingStatus = 'error';
			})
			.addDefaultCase(() => {});
	},
});

const { reducer, actions } = registrationSlice;

export const { clearLoadingStatus } = actions;

export default reducer;
