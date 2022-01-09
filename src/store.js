import { createStore, applyMiddleware } from "redux";
import { createStateSyncMiddleware, initMessageListener } from "redux-state-sync";
import reducer from "./Redux/reducer";

const middlewares = [createStateSyncMiddleware()];
const store = createStore(reducer, applyMiddleware(...middlewares));

store.subscribe(() => {
    window.localStorage.setItem('storageState', JSON.stringify(store.getState()))
})

initMessageListener(store)

export default store;