import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        id: Number(localStorage.getItem("kbuserId")),
        server: localStorage.getItem('kbserver'),
        username: localStorage.getItem("kbusername"),
        fullname: localStorage.getItem("kbfullname"),
        role: localStorage.getItem("kbrole"),
        roleCode: Number(localStorage.getItem("kbroleCode"))
    },
    reducers: {
        login(state, action) {
            state.id = action.payload.id
            state.server = action.payload.server 
            state.username = action.payload.username
            state.fullname = action.payload.fullname
            state.role = action.payload.role
            state.roleCode = Number(action.payload.roleCode)
            state.isLoggedIn = true
        },
        loggedin(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false

        },

    }
})

export const {
    login, loggedin, logout
} = authSlice.actions

export default authSlice