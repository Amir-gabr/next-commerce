import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseUrl = process.env.NEXT_PUBLIC_WIX_API_KEY;

// إنشاء thunk لجلب المنتجات
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      
//
    const options = {
      url: `https://www.wixapis.com/stores/v1/products/query`,
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${baseUrl}`,
      },
    };

    // Make the API request and return the movie data
    const response = await axios.request(options);
    console.log(response?.data);
    return response?.data;
          //
      // const response = await fetch(
      //   "https://www.wixapis.com/stores/v1/products/query",
      //   {
      //     method: "GET",
      //     headers: {
      //       Authorization: `Bearer ${baseUrl}`,
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       query: {},
      //       paging: { limit: 10, offset: 0 },
      //     }),
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error("Failed to fetch products");
      // }

      // const data = await response.json();
      // return data; // إرجاع البيانات بدلًا من `res.status(...).json(...)`
    } catch (error) {
      return error.message; // إرجاع الخطأ لـ Redux
    }
  }
);

// الحالة الأولية
const initialState = {
  items: [],
  isLoading: false,
  isError: null,
};

// إنشاء الـ slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items || []; // التأكد أن `items` موجودة في البيانات
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload || "Unknown error";
      });
  },
});

// تصدير الـ reducer
export const productsReducer = productsSlice.reducer;
