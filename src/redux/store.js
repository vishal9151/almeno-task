import {configureStore} from "@reduxjs/toolkit";
import {studentReducer} from "./reducers/userReducer"

const store=configureStore({
    reducer: {
        studentReducer
    }   
})

export default store;