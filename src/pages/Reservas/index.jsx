import React from "react";
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  removeReserve,
  updateQuantidadeRequest,
} from "../../store/modules/reserve/action";
import "./style.css";

export default function Reservas() {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reserve);

  function handleRemove(id) {
    dispatch(removeReserve(id));
  }

  function diminuir(trip) {
    dispatch(updateQuantidadeRequest(trip.id, trip.quantidade - 1));
  }
  function aumentar(trip) {
    dispatch(updateQuantidadeRequest(trip.id, trip.quantidade + 1));
  }
  return (
    <div>
      <h1 className="title">Voce solicitou {reserves.length} reservas</h1>

      {reserves.map((reserve) => (
        <div key={reserve.id} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <div id="amount">
            <button type="button" onClick={() => diminuir(reserve)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>
            <input type="text" readOnly value={reserve.quantidade} />
            <button type="button" onClick={() => aumentar(reserve)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>
          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}
      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}
