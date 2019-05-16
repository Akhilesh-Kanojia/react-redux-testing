
const initialState = {
    age: 21,
    number: 1
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
        newState.age++;
        newState.number++;
        break;
        case "AGE_DOWN":
        newState.age--
        newState.number--;
        break;
    }

    return newState;
}


export default Reducer;