import axios from "axios"
import { ADDSTUDENTREJ, ADDSTUDENTREQ, ADDSTUDENTRES, DELETESTUDENTREJ, DELETESTUDENTREQ, GETSINGLESTUDENTREJ, GETSINGLESTUDENTREQ, GETSINGLESTUDENTRES, GETSTUDENTREJ, GETSTUDENTREQ, GETSTUDENTRES, UPDATESTUDENTREJ, UPDATESTUDENTREQ, UPDATESTUDENTRES } from "../const"

export const addStudentReq = ()=> {
    return{
        type: ADDSTUDENTREQ
    }
}
export const addStudentRes = ()=> {
    return{
        type: ADDSTUDENTRES
    }
}
export const addStudentRej = (err)=> {
    return{
        type: ADDSTUDENTREJ,
        payload : err
    }
}

export const addStudent = (data) =>{
    return dispatch => {
        dispatch(addStudentReq());
        axios.post(`http://localhost:3000/students` , data).then(()=>{
            dispatch(addStudentRes());
            dispatch(getStudent());
        }).catch((err) =>{
            dispatch(addStudentRej(err))
        })

    }
}

export const updateStudentReq = ()=> {
    return{
        type: UPDATESTUDENTREQ
    }
}
export const updateStudentRes = ()=> {
    return{
        type: UPDATESTUDENTRES
    }
}
export const updateStudentRej = (err)=> {
    return{
        type: UPDATESTUDENTREJ,
        payload : err
    }
}

export const updateStudent = (data) =>{
    return dispatch => {
        dispatch(updateStudentReq());
        axios.patch(`http://localhost:3000/students/${data.id}` , data).then(()=>{
            dispatch(updateStudentRes());
            dispatch(getStudent());
        }).catch((err) =>{
            dispatch(updateStudentRej(err))
        })

    }
}
export const getStudentReq = ()=> {
    return{
        type: GETSTUDENTREQ
    }
}
export const getStudentRes = (data)=> {
    return{
        type: GETSTUDENTRES,
        payload :data
    }
}
export const getStudentRej = (err)=> {
    return{
        type: GETSTUDENTREJ,
        payload : err
    }
}

export const getStudent = () =>{
    return dispatch => {
        dispatch(getStudentReq());
        axios.get(`http://localhost:3000/students`).then((res)=>{
            dispatch(getStudentRes(res.data));
        }).catch((err) =>{
            dispatch(getStudentRej(err))
        })

    }
}
export const getSingleStudentReq = ()=> {
    return{
        type: GETSINGLESTUDENTREQ
    }
}
export const getSingleStudentRes = (data)=> {
    return{
        type: GETSINGLESTUDENTRES,
        payload :data
    }
}
export const getSingleStudentRej = (err)=> {
    return{
        type: GETSINGLESTUDENTREJ,
        payload : err
    }
}

export const getSingleStudent = (id) =>{
    return dispatch => {
        dispatch(getSingleStudentReq());
        axios.get(`http://localhost:3000/students/${id}`).then((res)=>{
            dispatch(getSingleStudentRes(res.data));
        }).catch((err) =>{
            dispatch(getSingleStudentRej(err))
        })

    }
}
export const deleteStudentReq = ()=> {
    return{
        type: DELETESTUDENTREQ
    }
}
export const deleteStudentRej = (err)=> {
    return{
        type: DELETESTUDENTREJ,
        payload : err
    }
}

export const deleteStudent = (id) =>{
    return dispatch => {
        dispatch(deleteStudentReq());
        axios.delete(`http://localhost:3000/students/${id}` ).then(()=>{;
            dispatch(getStudent());
        }).catch((err) =>{
            dispatch(deleteStudentRej(err))
        })

    }
}