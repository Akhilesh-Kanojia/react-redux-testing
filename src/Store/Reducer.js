
const initialState = {
    age: 21,
    number: 1,
    history: []
}

const Reducer = (state = initialState, action) => {
    const newState = {...state}

    // if(action.type === 'AGE_UP' ){
    //      newState.age++
    // }

    // if(action.type === 'AGE_DOWN' ){
    //     newState.age--
    // }

   // For multiple state use switch
    switch(action.type){
        case "AGE_UP":
       // newState.age++;
       // newState.number++;
       return{
           ...state,
           age: state.age + action.value,
           history: state.history.concat({age: state.age + action.value, id: Math.random()})
       }

        case "AGE_DOWN":
        //newState.age--
        //newState.number--;
        return{
            ...state,
            age: state.age - action.value,
            history: state.history.concat({age: state.age - action.value, id: Math.random()})
        };

        case "DEL_ITEM":
        return{
           ...state,
           history: state.history.filter(el => el.id !== action.key)
        }

        break;
    }

    return newState;
}


export default Reducer;