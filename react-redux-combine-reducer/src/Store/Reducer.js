
const initialState = {
    a: 1,
    b: 1
}

const Reducer = (state = initialState, action) => {
    
    if(action.type === 'Update_A' ){
        return{
            ...state,
            a:state.a + state.b
        }
     }

     if(action.type === 'Update_B' ){
        return{
            ...state,
            b:state.a + state.b
        }
    }

    return state;
}


export default Reducer;