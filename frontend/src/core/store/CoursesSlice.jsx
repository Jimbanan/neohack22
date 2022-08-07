import {
	createSlice,
	createEntityAdapter,
	createAsyncThunk,
} from '@reduxjs/toolkit';

const claimsAdapter = createEntityAdapter();

const initialState = claimsAdapter.getInitialState({
	coursesLoadingStatus: 'idle',
});

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchCourses = createAsyncThunk(
	'courses/fetchCourses',
	async () => {
		try {
			const response = await fetch(`${BASE_URL}/courses`);

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

export const fetchCourse = createAsyncThunk(
	'courses/fetchCourse',
	async (id) => {
		try {
			const response = await fetch(`${BASE_URL}/student/courses/${id}`);

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

export const fetchLesson = createAsyncThunk(
	'courses/fetchLesson',
	async (id) => {
		try {
			const response = await fetch(`${BASE_URL}/student/lesson/${id}`);

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

const claimsSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCourses.pending, (state) => {
				state.claimsLoadingStatus = 'loading';
			})
			.addCase(fetchCourses.fulfilled, (state, action) => {
				claimsAdapter.setAll(state, action.payload);
				state.claimsLoadingStatus = 'idle';
			})
			.addCase(fetchCourses.rejected, (state) => {
				state.claimsLoadingStatus = 'error';
			})
			.addDefaultCase(() => {});
	},
});

const { reducer } = claimsSlice;

export default reducer;

export const { selectAll } = claimsAdapter.getSelectors(
	(state) => state.claims
);
