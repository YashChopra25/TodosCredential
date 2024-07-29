import { createSlice, nanoid } from "@reduxjs/toolkit";
import { arrayType, initialStateType } from "@/lib/Types";


const initialState: initialStateType = {
    name: "Joe Gardner",
    email: "",
    to_do: [{
        id: "789534904",
        title: "Yash",
        status: "to_do",
        description: "Develop and integrate user authentication using email and password.",
        priority: "urgent",
        date: "2024-07-25T10:36:24.860+00:00",
        createdAt: "2024-06-25T10:36:24.860+00:00"
    }],
    in_progress: [
        {
            id: "45675354",
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
        id: "445675356",
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
let ManupulateTodo: arrayType;
export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addName: (state, action) => {
            state.name = action.payload.name
        },
        removeName: (state, _) => {
            state.name = ""
        },
        addTask: (state, action) => {
            const NewTodo: arrayType = {
                date: action.payload.deadline,
                createdAt: "2024-06-25T10:36:24.860+00:00",
                description: action.payload.description,
                id: nanoid(),
                priority: action.payload.priority,
                status: "to_do",
                title: action.payload.title
            }
            switch (action.payload.status) {
                case "to_do":
                    state.to_do.push(NewTodo);
                    break;
                case "in_progress":
                    state.in_progress.push(NewTodo)
                    break;
                case "under_review":
                    state.under_review.push(NewTodo)
                    break;
                case "finished":
                    state.finished.push(NewTodo)
                    break;
                default:
                    break;
            }
        },
        DragTask: (state, action) => {
            switch (action.payload.source.droppableId) {
                case "to_do":
                    state.to_do.map((item) => {
                        if (item.id === action.payload.draggableId) {
                            ManupulateTodo = { ...item }
                        }
                    });
                    break;
                case "in_progress":
                    state.in_progress.map((item) => {
                        if (item.id === action.payload.draggableId) {
                            ManupulateTodo = { ...item }
                        }
                    });
                    break;
                case "under_review":
                    state.under_review.map((item) => {
                        if (item.id === action.payload.draggableId) {
                            ManupulateTodo = { ...item }
                        }
                    });
                    break;
                case "finished":
                    state.finished.map((item) => {
                        if (item.id === action.payload.draggableId) {
                            ManupulateTodo = { ...item }
                        }
                    });
                    break;
                default:
                    break;
            }
            console.log(ManupulateTodo)
            switch (action.payload.destination.droppableId) {
                case "to_do":
                    state.to_do.splice(action.payload.destination.index, 0, ManupulateTodo)
                    break;
                case "in_progress":
                    state.in_progress.splice(action.payload.destination.index, 0, ManupulateTodo)
                    break;
                case "under_review":
                    state.under_review.splice(action.payload.destination.index, 0, ManupulateTodo)
                    break;
                case "finished":
                    state.finished.splice(action.payload.destination.index, 0, ManupulateTodo)
                    break;

                default:
                    break;
            }
        },
        removeTask: (state, action) => {
            switch (action.payload.source.droppableId) {
                case "to_do":
                    state.to_do = state.to_do.filter((item) => {
                        return item.id !== action.payload.draggableId
                    });
                    break;
                case "in_progress":
                    state.in_progress = state.in_progress.filter((item) => {
                        return item.id !== action.payload.draggableId
                    });
                    break;
                case "under_review":
                    state.under_review = state.under_review.filter((item) => {

                        return item.id !== action.payload.draggableId
                    });
                    break;
                case "finished":
                    state.finished = state.finished.filter((item) => {
                        if (item.id == action.payload.draggableId) {
                            ManupulateTodo = { ...item };
                        }
                        return item.id !== action.payload.draggableId
                    });
                    break;
                default:
                    break;
            }
        }
    }
})

export const { addName, removeName, addTask, removeTask, DragTask } = appSlice.actions
export default appSlice.reducer