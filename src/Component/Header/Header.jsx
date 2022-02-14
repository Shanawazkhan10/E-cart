import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import {
  cartTotalPriceSelector,
  cartTotalSelector,
} from "../../Feature/Cart/TotalSum";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const totalPrice = useSelector(cartTotalPriceSelector);
  const totalQty = useSelector(cartTotalSelector);
  const navigate = useNavigate();
  return (
    <div>
      <header class="header-fixed">
        <div class="header-limiter">
          <h1>
            <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              E-<span>Cart</span>
            </a>
          </h1>

          <nav>
            <a onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              Home
            </a>
            <a style={{ fontWeight: "bold", color: "#5383d3" }}>
              {" "}
              ₹. {totalPrice}
            </a>

            <BsFillCartCheckFill
              onClick={() => navigate("/cart")}
              className="selected"
              style={{
                fontSize: 30,
                cursor: "pointer",
                marginLeft: 10,
                color: "#5383d3",
              }}
            />
            {/* <div> */}
            <a style={{ fontSize: 10, fontWeight: "bold", color: "#5383d3" }}>
              {" "}
              {totalQty}
            </a>
            {/* </div> */}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
