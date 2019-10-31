import { createStore } from "redux"
import  rootReducers from "../reducers"

export default function configureStore(){
    const store = createStore(rootReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() :undefined
    );
    return store;
}