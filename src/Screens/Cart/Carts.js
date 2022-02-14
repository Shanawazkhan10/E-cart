import React from "react";
import CartProduct from "../../Component/CartProduct/CartProduct";
import { handlePay } from "../../RazorPay/RazorPay";
import { cartTotalPriceSelector } from "../../Feature/Cart/TotalSum";
import { useSelector, useDispatch } from "react-redux";
const Carts = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container" style={{ marginTop: 50 }}>
        <div className="row">
          <div className="col-8">
            <CartProduct />
          </div>
          <div className="col-4">
            <h4>CHECKOUT DETAILS</h4>
            <div>
              <h5>TOTAL PRICE: Rs. {totalPrice}</h5>
            </div>

            <button
              onClick={(e) => handlePay(totalPrice && totalPrice)}
              className="payButton"
            >
              PAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
