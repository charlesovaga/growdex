// // import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //     token: localStorage.getItem("authToken") || null,
// //   };
  

// // const authSlice = createSlice({
// //   name: "auth",
// //   initialState,
// //   reducers: {
// //     setCredentials: (state, action) => {
// //       state.token = action.payload.token;
// //       state.admin = action.payload.admin;
// //     },
// //     logout: (state) => {
// //       state.token = null;
// //       state.admin = null;
// //     },
// //   },
// // });

// // export const { setCredentials, logout } = authSlice.actions;
// // export default authSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   token: localStorage.getItem("accessToken") || null,
//   admin: JSON.parse(localStorage.getItem("adminData")) || null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       state.token = action.payload.token;
//       state.admin = action.payload.admin;

//       // ✅ persist to localStorage
//       localStorage.setItem("accessToken", action.payload.token);
//       localStorage.setItem("adminData", JSON.stringify(action.payload.admin));
//     },
//     logout: (state) => {
//       state.token = null;
//       state.admin = null;

//       //  clear localStorage
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("adminData");
//     },
//   },
// });

// export const { setCredentials, logout } = authSlice.actions;
// export default authSlice.reducer;

// store/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  loading: true, // important to know while bootstrapping
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.loading = false;
    },
    clearAuth: (state) => {
      state.token = null;
      state.user = null;
      state.loading = false;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setCredentials, clearAuth, finishLoading } = authSlice.actions;
export default authSlice.reducer;
