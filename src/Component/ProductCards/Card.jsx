import React from "react";
import { addToCart } from "../../Feature/Cart/CartSlice";
import p1 from "../../images/2.jpg";
import p2 from "../../images/1.jpg";
import p3 from "../../images/3.jpg";
import p4 from "../../images/4.jpg";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = () => {
  const dispatch = useDispatch();
  const product = [
    {
      id: 1,
      img: p1,
      name: "Airpods",
      des: "Wireless",
      qty: 1,
      dataPrice: 399,
    },
    {
      id: 2,
      img: p2,
      name: "Boat Headphone",
      des: "Wireless",
      qty: 1,
      dataPrice: 1399,
    },
    {
      id: 3,
      img: p3,
      name: "HP & Dell Laptop",
      des: "Portable",
      qty: 1,
      dataPrice: 22399,
    },
    {
      id: 4,
      img: p4,
      name: "IPHONE 14 Pro",
      des: "With M1 CHIP",
      qty: 1,
      dataPrice: 122399,
    },
  ];
  const HandleAddToCart = ({ id, name, qty, img, dataPrice }) => {
    dispatch(addToCart({ name, id, dataPrice, img, qty }));
    toast(`Item Added to cart`);
  };
  return (
    <div>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        toastStyle={{ backgroundColor: "white", color: "black" }}
      />
      <h1>OUR LATEST PRODUCTS</h1>
      <div className="container" style={{ padding: 20 }}>
        <div className="row">
          {product.map(({ id, name, dataPrice, qty, des, img }) => (
            <div className="col-sm" key={id}>
              <div className="card" style={{ width: 250 }}>
                <img
                  className="card-img-top"
                  style={{ width: 200, height: 220 }}
                  src={img}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{des}</p>
                  <p
                    className="card-text"
                    style={{ fontWeight: "bold", fontSize: 20 }}
                  >
                    ₹ {dataPrice}
                  </p>
                  <a
                    onClick={() =>
                      HandleAddToCart({ id, name, qty, img, dataPrice })
                    }
                    style={{ backgroundColor: "#720707" }}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
