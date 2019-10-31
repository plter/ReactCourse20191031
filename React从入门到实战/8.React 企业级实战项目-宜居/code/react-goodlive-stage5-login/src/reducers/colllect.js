import * as collectActions from "../constants/collect"

const initState = [];
export default function collect(state = initState, action) {
    switch (action.type) {
        case collectActions.COLLECT:
            state.push(action.data)
            return state;
        case collectActions.UNCOLLECT:
            return state.filter((element) => {
                if (element.id !== action.data.id) {
                    return element;
                }
            })
        default:
            return state;
    }
}