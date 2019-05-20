
const initialState = {
    b: 1
}

const Reducer = (state = initialState, action) => {
    
     if(action.type === 'Update_B' ){
        return{
            ...state,
            b:action.a + state.b
        }
    }

    return state;
}


export default Reducer;