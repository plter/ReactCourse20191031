import * as cityActions from "../constants/city"

const initState = {};
export default function city(state = initState,action){
    switch(action.type){
        case cityActions.INIT_CITY:
            return state = action.data;
        case cityActions.UPDATE_CITY:
            return state = action.data;
        default:
            return state;
    }
}