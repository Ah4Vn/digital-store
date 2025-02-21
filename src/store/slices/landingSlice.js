import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../sanity/lib/client';

const initialState = {
  loading: false,
  landingPage: {
    products: [],
    bannerData: [],
    categories: [],
  },
  error: null,
};

export const fetchLandingPage = createAsyncThunk(
  'landing/fetchLandingPage',
  async (_, { rejectWithValue }) => {
    try {
      const query = `{
        "products": *[_type == "product"],
        "bannerData": *[_type == "banner"],
        "categories": *[_type == "category"]{ _id, title, icon }
      }`;
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLandingPage.fulfilled, (state, action) => {
        state.loading = false;
        state.landingPage = action.payload;
      })
      .addCase(fetchLandingPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default landingSlice.reducer;
