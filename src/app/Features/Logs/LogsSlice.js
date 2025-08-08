import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("Users")) || {}

const LogSlice = createSlice({
    name: 'Log',
    initialState,
    reducers: {
        register: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value
            // Update localStorage with the updated state
            localStorage.setItem('Users', JSON.stringify(state))
        },
        login: (state, action) => {
            const username = action.payload
            if (state[username]) {
                state[username].logged = true;
                // Update localStorage with the updated state
                localStorage.setItem('Users', JSON.stringify(state));
            }
        },
        logOut: (state, action) => {
            const username = action.payload
            if (state[username]) {
                state[username].logged = false;
                // Update localStorage with the updated state
                localStorage.setItem('Users', JSON.stringify(state))
            }
        },
        updtAdd: (state, action) => {
            const { user, upAdd } = action.payload
            if (state[user]) {
                state[user].address = upAdd;
            } else {
                console.warn(`User "${user}" not found in state.`);
            }
            // Update localStorage with the updated state
            localStorage.setItem('Users', JSON.stringify(state))
        }
    }
})

export default LogSlice.reducer;
export const {
    register,
    login, logOut, updtAdd
} = LogSlice.actions;