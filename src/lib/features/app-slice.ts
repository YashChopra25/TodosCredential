import { createSlice } from "@reduxjs/toolkit";
export interface arrayType {
    id: string;
    title: string;
    description: string;
    priority: "low" | "medium" | "urgent";
    date: string;
    createdAt: string;
    status: "to_do" | "in_progress" | "under_review" | "finished"
}
interface initialStateType {
    name: string,
    email: string,
    to_do: arrayType[],
    in_progress: arrayType[],
    under_review: arrayType[],
    finished: arrayType[],
    token: string
}
const initialState: initialStateType = {
    name: "Joe Gardner",
    email: "",
    to_do: [{
        id: "789534904",
        title: "Implement User Authentication",
        status: "to_do",
        description: "Develop and integrate user authentication using email and password.",
        priority: "urgent",
        date: "2024-07-25T10:36:24.860+00:00",
        createdAt: "2024-06-25T10:36:24.860+00:00"
    }],
    in_progress: [
        {
            id: "456753",
            title: "Implement User Authentication",
            status: "in_progress",
            description: "Develop and integrate user authentication using email and password.",
            priority: "low",
            date: "2024-07-25T10:36:24.860+00:00",
            createdAt: "2024-07-25T10:36:24.860+00:00"
        },
        {
            id: "456753",
            title: "Implement User Authentication",
            status: "in_progress",
            description: "Develop and integrate user authentication using email and password.",
            priority: "medium",
            date: "2024-07-25T10:36:24.860+00:00",
            createdAt: "2024-07-25T10:36:24.860+00:00"
        },
    ],
    under_review: [{
        id: "45675356",
        title: "Implement User Authentication",
        status: "under_review",
        description: "Develop and integrate user authentication using email and password.",
        priority: "urgent",
        date: "2024-07-25T10:36:24.860+00:00",
        createdAt: "2024-07-27T10:36:24.860+00:00"
    }],
    finished: [{
        id: "456776553",
        title: "Implement User Authentication",
        status: "finished",
        description: "Develop and integrate user authentication using email and password.",
        priority: "medium",
        date: "2024-07-25T10:36:24.860+00:00",
        createdAt: "2024-07-29T10:36:24.860+22:00"
    }],
    token: ""
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addName: (state, action) => {
            state.name = action.payload.name
        },
        removeName: (state, action) => {
            state.name = ""

        }
    }
})

export const { addName, removeName } = appSlice.actions
export default appSlice.reducer