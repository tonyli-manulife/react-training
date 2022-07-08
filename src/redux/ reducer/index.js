const initState={
    data:[]
}
function myReducer(state=initState,action){
    switch(action.type){
        case 'GET_DATA_SUCCESS':
            return {
                ...state,
                data:action.data
            }
        default:
            return state;
    }
}
export default myReducer;