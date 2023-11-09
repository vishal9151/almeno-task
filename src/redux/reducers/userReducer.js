import { createSlice } from "@reduxjs/toolkit";


const intialState=[]


export const studentSlice=createSlice({
    name:'student',
    initialState:intialState,
    reducers:{
        addCourse: (state,action)=>{
            state.push(action.payload)
        },
        toggleCourse: (state, action) => {
            const courseIndex = state.findIndex((course) => course.id === action.payload.id);
            if (courseIndex !== -1) {
              state[courseIndex].enrollmentStatus = action.payload.enrollmentStatus;
            }
          },
    }
});


export const {addCourse,toggleCourse}= studentSlice.actions;

export const studentReducer=studentSlice.reducer;