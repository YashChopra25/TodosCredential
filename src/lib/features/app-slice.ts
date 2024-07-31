import { createSlice } from "@reduxjs/toolkit";
import { arrayType, initialStateType } from "@/lib/Types";


const initialState: initialStateType | any= {
    name: "",
    email: "",
    to_do: [],
    in_progress: [],
    under_review: [],
    finished: [],
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
        addinitialState: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.to_do = action.payload?.to_do || []
            state.in_progress = action.payload?.in_progress || []
            state.under_review = action.payload?.under_review || []
            state.finished = action.payload?.finished || []
        },
        addTask: (state, action) => {
            const NewTodo: arrayType = {
                date: action.payload.deadline,
                createdAt: "2024-06-25T10:36:24.860+00:00",
                description: action.payload.description,
                id: action.payload._id,
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
                    state.to_do.map((item: arrayType) => {
                        if (item.id === action.payload.draggableId) {
                            ManupulateTodo = { ...item }
                        }
                    });
                    break;
                case "in_progress":
                    state.in_progress.map((item: arrayType) => {
                        if (item.id === action.payload.draggableId) {
                            ManupulateTodo = { ...item }
                        }
                    });
                    break;
                case "under_review":
                    state.under_review.map((item: arrayType) => {
                        if (item.id === action.payload.draggableId) {
                            ManupulateTodo = { ...item }
                        }
                    });
                    break;
                case "finished":
                    state.finished.map((item: arrayType) => {
                        if (item.id === action.payload.draggableId) {
                            ManupulateTodo = { ...item }
                        }
                    });
                    break;
                default:
                    break;
            }
            switch (action.payload.destination.droppableId) {
                case "to_do":
                    if (state.to_do.length > 0) {
                        state.to_do?.splice(action.payload.destination.index, 0, ManupulateTodo)
                    }
                    else {
                        state.to_do.push(ManupulateTodo)
                    }
                    break;
                case "in_progress":
                    if (state.in_progress.length > 0) {
                        state.in_progress?.splice(action.payload.destination.index, 0, ManupulateTodo)
                    }
                    else {
                        state.in_progress.push(ManupulateTodo)
                    }
                    break;
                case "under_review":
                    if (state.under_review.length > 0) {
                        state.under_review?.splice(action.payload.destination.index, 0, ManupulateTodo)
                    }
                    else {
                        state.under_review.push(ManupulateTodo)
                    }
                    break;
                case "finished":
                    if (state.finished.length > 0) {
                        state.finished?.splice(action.payload.destination.index, 0, ManupulateTodo)
                    }
                    else {
                        state.finished.push(ManupulateTodo)
                    }
                    break;

                default:
                    break;
            }
        },
        removeTask: (state, action) => {
            switch (action.payload.source.droppableId) {
                case "to_do":
                    state.to_do = state.to_do.filter((item: { id: any; }) => {
                        return item.id !== action.payload.draggableId
                    });
                    break;
                case "in_progress":
                    state.in_progress = state.in_progress.filter((item: { id: any; }) => {
                        return item.id !== action.payload.draggableId
                    });
                    break;
                case "under_review":
                    state.under_review = state.under_review.filter((item: { id: any; }) => {

                        return item.id !== action.payload.draggableId
                    });
                    break;
                case "finished":
                    state.finished = state.finished.filter((item: arrayType) => {
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

export const { addName, removeName, addTask, removeTask, DragTask, addinitialState } = appSlice.actions
export default appSlice.reducer
