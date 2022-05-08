import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from 'redux-saga'
import { userWatcher } from "../saga/userSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(userWatcher)


