import * as types from "../type/type";


const inititalState = {
    users:[],
    user:{}
}
const crudReducer = (state = inititalState,action) => {
    switch (action.type) {
        case types.GET_DATA:
            return {
                ...state,
                users:action.payload
            }
            break;

        case types.DELETE_DATA:
            return {
                ...state
            }
            break;
            
        case types.ADD_DATA:
            return {
                ...state
            }
            break;

        case types.SINGLE_EDIT_STATE:
            return {
                ...state,
                user:action.payload
            }
            break;
    
        default:
            return state
            break;
    }
}
export default crudReducer;