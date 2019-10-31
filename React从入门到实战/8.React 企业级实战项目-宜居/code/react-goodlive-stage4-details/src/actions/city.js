import * as cityActions from "../constants/city"

export function initCity(data){
    return{
        type:cityActions.INIT_CITY,
        data
    }
}

export function updateCity(data){
    return{
        type:cityActions.UPDATE_CITY,
        data
    }
}