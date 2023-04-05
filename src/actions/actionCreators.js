export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function incrementCount(){
    return{
        type:INCREMENT
    }
}
export function decrementCount(){
    return{
        type:DECREMENT
    }
}
export function resetCount(){
    return{
        type:RESET
    }
}