import { select, call, put, all, takeLatest } from "redux-saga/effects";

import { addReserveSuccess, updateQuantidadeSuccess } from "./action";

import api from "../../../services/api";
import history from "../../../services/history";

function* addToReserve({ id }) {
  const tripExists = yield select((state) =>
    state.reserve.find((trip) => trip.id === id)
  );

  const myStock = yield call(api.get, `/stock/${id}`);

  const stockAmount = myStock.data.amount;

  const currentStock = tripExists ? tripExists.quantidade : 0;

  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert("Quantidade máxima atingida");
    return;
  }

  if (tripExists) {
    yield put(updateQuantidadeSuccess(id, amount));
  } else {
    const response = yield call(api.get, `trips/${id}`);

    const data = {
      ...response.data,
      quantidade: 1,
    };

    yield put(addReserveSuccess(data));
    history.push("/reservas");
  }
}

function* updateAmount(id, quantidade) {
  if (quantidade <= 0) return;

  const myStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = myStock.data.amount;

  if (quantidade > stockAmount) {
    alert("Quantidade máxima atingida");
    return;
  }

  yield put(updateQuantidadeSuccess(id, quantidade));
}

export default all([
  takeLatest("ADD_RESERVE_REQUEST", addToReserve),
  takeLatest("UPDATE_RESERVE_REQUEST", updateAmount),
]);
