/* eslint-disable no-use-before-define */
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk(
    "students/fetchStudents",
    async function (subject, { rejectWithValue }) {
        try {
            const res = await axios.get(
                `http://localhost:1717/students/${subject}`
            );

            const students = await res.data;

            return students;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addStudents = createAsyncThunk(
    "students/addStudents",
    async function ({ name, score, level, subject }, { rejectWithValue }) {
        try {
            const res = await axios.post(
                `http://localhost:1717/students/${subject}/add`,
                {
                    name: name,
                    score: score,
                    level: level,
                }
            );

            addStudent({ name, score, level });
            const students = await res.data;

            return students;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const studentSlice = createSlice({
    name: "students",
    initialState: {
        loading: false,
        students: [],
    },
    reducers: {
        addStudent(state, action) {
            state.students.push({
                id: new Date().toISOString(),
                name: action.payload,
                level: action.payload,
                score: action.payload,
            });
        },
    },
    extraReducers: {
        [fetchStudents.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },

        [fetchStudents.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.students = action.payload;
        },

        [fetchStudents.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    },
});

export const { addStudent } = studentSlice.actions;

export default studentSlice.reducer;
