import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: "Mohammad Ali", email: "itsproali@gmail.com" },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;