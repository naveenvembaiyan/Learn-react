import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AxiosInstance from '@/helpers/AxiosInstance';
import { Alert } from '@/helpers/utils';

const initialState = {
  data: [],
  status: 'idle', // 'idle', 'loading', 'fulfilled', 'error'
};

export const getProducts = createAsyncThunk(
  'get/products',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get('product', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
        Alert('success', 'Products loaded successfully!');
      })

      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'error';
        Alert('error', 'Failed to load products.');
        console.error('Error fetching products:', action.payload);
      });
  },
});

export default productSlice.reducer;
