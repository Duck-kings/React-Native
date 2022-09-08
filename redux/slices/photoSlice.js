import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { REACT_APP_ACCESS_KEY, REACT_APP_API_URL } from '@env';

export const fetchPhotos = createAsyncThunk(
    'photoSlice/fetchPhotos',
    async(_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${REACT_APP_API_URL}?per_page=20&client_id=${REACT_APP_ACCESS_KEY}`);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const initialState = {
    photos: [],
    isLoading: false,
    isError: false
};

const photoSlice = createSlice({
    name: 'photoSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPhotos.pending, (state, action) => {
            state.isLoading = true;
            state.photos = [];
        });

        builder.addCase(fetchPhotos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.photos = [...state.photos, ...action.payload];
        });

        builder.addCase(fetchPhotos.rejected, (state, action) => {
            state.isLoading = false,
            state.photos = [];
            state.isError = true;
        });
    }
});

export default photoSlice.reducer;