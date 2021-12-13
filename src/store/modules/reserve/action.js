export function addReserveRequest(id) {
  return {
    type: "ADD_RESERVE_REQUEST", //OBRIGATÓRIO
    id,
  };
}

export function addReserveSuccess(trip) {
  return {
    type: "ADD_RESERVE_SUCCESS", //OBRIGATÓRIO
    trip,
  };
}

export function removeReserve(id) {
  return {
    type: "REMOVE_RESERVE",
    id,
  };
}

export function updateQuantidadeRequest(id, quantidade) {
  return {
    type: "UPDATE_RESERVE_REQUEST",
    id,
    quantidade,
  };
}
export function updateQuantidadeSuccess(id, quantidade) {
  return {
    type: "UPDATE_RESERVE_SUCCESS",
    id,
    quantidade,
  };
}
