import React from "react";
import "./style.css";
import {
  clear,
  decrement,
  increament,
  removeTodo,
} from "../../Feature/Cart/CartSlice";
import { useSelector, useDispatch } from "react-redux";
const CartProduct = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div className="container" style={{ padding: 20 }}>
        <div className="row">
          {cart?.map(({ id, name, dataPrice, quantity, img }) => (
            <div key={id} className="col-sm">
              <div className="card" style={{ width: 250 }}>
                <img
                  className="card-img-top"
                  style={{ width: 200, height: 220 }}
                  src={img}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <button
                    className="buttonStyle"
                    onClick={() => dispatch(increament(id))}
                  >
                    +
                  </button>
                  &nbsp;&nbsp;
                  <span>{quantity}</span>&nbsp;&nbsp;
                  <button
                    className="buttonStyle"
                    onClick={() => {
                      quantity > 1 && dispatch(decrement(id));
                    }}
                  >
                    -
                  </button>
                </div>
                <div className="card-body">
                  <button
                    className="remove"
                    onClick={() => dispatch(removeTodo(id))}
                  >
                    Remove Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
