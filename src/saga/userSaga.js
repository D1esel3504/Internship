import { call, put, takeEvery } from 'redux-saga/effects'
import { addAllUsersAction, FETCH_USERS } from '../store/reducer'


const fetchUsersfromApi = () => fetch("https://jsonplaceholder.typicode.com/users")






function* fetchUserWorker() {
    const data = yield call(fetchUsersfromApi)
    const json = yield call(() => data.json())
    yield put(addAllUsersAction(json))
}





export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)

}