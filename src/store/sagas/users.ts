import { call, put, delay, takeLatest } from "redux-saga/effects";
import { parseUsers } from "../../helpers/users";
import { fetchUsers } from "../../services/users";
import * as actions from "../actions/users";
import * as types from "../actions/types";

function* fetchUsersRequest() {
  try {
    // TODO check if this is necessary
    yield delay(2000);

    // @ts-ignore
    const response = yield call(fetchUsers);

    if (!!response.length) {
      // TODO check if this is necessary
      const users = parseUsers(response);
      yield put(
        actions.fetchUsersSuccess({
          data: users,
        })
      );
    } else {
      yield put(actions.fetchUsersFailure(response.error));
    }
  } catch (e) {
    yield put(actions.fetchUsersFailure(e));
  }
}

export default function* usersSaga() {
  yield takeLatest(types.FETCH_USERS_REQUEST, fetchUsersRequest);
}
