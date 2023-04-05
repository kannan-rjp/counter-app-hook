const initial_state = {
    count:0
}
const counterReducer = (state=initial_state,action)=> {
    switch(action.type){
        case 'INCREMENT':
            console.log(initial_state.count,'start')
            return {...state,count:state.count+1};
        case 'DECREMENT':
            console.log(state.count,'Current state...')
            return {...state, count:state.count-1};
        case 'RESET':
            console.log('rese')
            console.log(initial_state.count,'start')
            return (initial_state)
        default:
            return state    

    }
}
export default counterReducer;