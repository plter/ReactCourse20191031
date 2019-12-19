export default {
    state:{
        count:{
            num:{
                value:1
            }
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            dispatch({type:'update'})
        },
    },
    reducers: {
        /**
         * 不允许直接修改state
         *     [...arr1,...arr2];
         *      concat
         *      深度拷贝
         */
        update(state) {
            state.count.num.value += 1
        },
    },
    effects: {
        *fetch({ type, payload }, { put, call, select }) {
        },
    },
}