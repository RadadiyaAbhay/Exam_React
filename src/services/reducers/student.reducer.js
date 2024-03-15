import { ADDSTUDENTREJ, ADDSTUDENTREQ, ADDSTUDENTRES, DELETESTUDENTREJ, DELETESTUDENTREQ, GETSINGLESTUDENTREJ, GETSINGLESTUDENTREQ, GETSINGLESTUDENTRES, GETSTUDENTREJ, GETSTUDENTREQ, GETSTUDENTRES, UPDATESTUDENTREJ, UPDATESTUDENTREQ, UPDATESTUDENTRES } from "../const";

let initalState = {
    student: null,
    students: [],
    isLoading: false,
    err: null
}

export const studentReducer = (state = initalState, action) => {
    console.log(action);
    switch (action.type) {
        case ADDSTUDENTREQ:
            return {
                ...state,
                isLoading: true,
            }
        case ADDSTUDENTRES:
            return {
                ...state,
                isLoading: false,
            }
        case ADDSTUDENTREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case UPDATESTUDENTREQ:
            return {
                ...state,
                isLoading: true,
            }
        case UPDATESTUDENTRES:
            return {
                ...state,
                isLoading: false,
            }
        case UPDATESTUDENTREJ:

            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case GETSTUDENTREQ:
            return {
                ...state,
                isLoading: true,
            }
        case GETSTUDENTRES:
            return {
                ...state,
                isLoading: false,
                students: action.payload
            }
        case GETSTUDENTREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case GETSINGLESTUDENTREQ:
            return {
                ...state,
                isLoading: true,
            }
        case GETSINGLESTUDENTRES:
            return {
                ...state,
                isLoading: false,
                student: action.payload
            }
        case GETSINGLESTUDENTREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case DELETESTUDENTREQ:
            return {
                ...state,
                isLoading: true,
            }

        case DELETESTUDENTREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        default:
            return state;
    }
}