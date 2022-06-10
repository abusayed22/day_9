import * as types from "../type/type";


const inititalState = {
    users:[],
    user:{}
}
const crudReducer = (state = inititalState,action) => {
    switch (action.types) {
        case types.GET_DATA:
            return {
                type:types.GET_DATA,
                users:action.payload
            }
            break;
    
        default:
            return state
            break;
    }
}
export default crudReducer;