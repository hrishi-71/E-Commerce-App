import React from "react";
import "./RightCartIcon.css";
import { HiShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { totalCartItem } from "../../Features/Cart/CartSelector";

function RightCartIcon() {
  let state = useSelector((state) => state);
  let totalItems = totalCartItem(state);
  return (
    <NavLink to={`/cart`}>
      <div className="cart-icon rounded-circle">
        <div className="d-flex flex-column">
          <span>
            <HiShoppingCart />
          </span>
          <span className="itemCount">{totalItems}</span>
        </div>
      </div>
    </NavLink>
  );
}

export default RightCartIcon;
