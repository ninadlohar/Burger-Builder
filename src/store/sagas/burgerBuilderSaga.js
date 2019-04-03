import axios from "../../axios";
import { put, delay } from "redux-saga/effects";
import * as actions from "../actions/index";

export function* initIngredientSaga(action) {
  try {
    const response = yield axios.get(
      "https://react-burger-6caf1.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIngredients(response.data));
  } catch (e) {
    yield put(actions.fetchIngredientsFailed());
  }
}
