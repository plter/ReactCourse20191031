import * as collectActinos from "../constants/collect"

export function setCollect(data){
    return{
        type:collectActinos.COLLECT,
        data
    }
}

export function cancelCollect(data){
    return{
        type:collectActinos.UNCOLLECT,
        data
    }
}