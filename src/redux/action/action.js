import axios from 'axios';
import * as types from '../type/type';

const get_data = (data) => {
    return {
        type:types.GET_DATA,
        payload:data
    }
}
export const pre_get_data = () => {
    return dispatch => {
        axios.get("api/students/")
        .then(res => {
            dispatch(get_data(res.data.students))
        })
        .catch(err => console.log(err))
    }
}


const delete_data = () => {
    return {
        type:types.DELETE_DATA
    }
}
export const pre_delete_data = (id) => {
    return dispatch => {
        axios.delete(`/api/students/${id}`)
        .then(res => {
            dispatch(delete_data())
            dispatch(get_data)
        })
        .catch(err => console.log(err))
    }
}


const add_data = () => {
    return{
        type:types.ADD_DATA
    }
}
export const pre_add_data = (add) => {
    return dispatch => {
        axios.post("api/students/",add)
        .then(res => {
            dispatch(add_data())
        })
        .catch( err => console.log(err))
    }
}

const go_single = (data) => {
    return {
        type:types.SINGLE_EDIT_STATE,
        payload:data
    }
}
export const pre_go_single = (id) => {
    return dispatch => {
        axios.get(`/api/students/${id}`)
        .then(res => {
            dispatch(go_single(res.data.student))
        })
        .catch(err => console.log(err))
    }
}