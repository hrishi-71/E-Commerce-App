import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../Coponents/Cart/CartItemCard";
import Footer from "../Coponents/Footer/Footer";
import {
  subTotalPrice,
  totalPrice,
  totalTax,
} from "../Features/Cart/CartSelector";
import { cartState } from "../Features/Cart/CartSlice";
import Checkout from "../Coponents/Cart/Checkout";


function Cart({form,change}) {
  let state = useSelector((state) => state);
  const [checkout, updatecheck] = useState(false)

  const Users = useSelector((state) => state.logs);
  const [user, lguser] = useState(false)
  useEffect(() => {
      for (let usernameKey in Users) {
        let username = Users[usernameKey];
        if (username.logged) {
          lguser(true)
          break;
        }else{
          lguser(false)
        }
      }
    }, [Users]);
  
  let { carts } = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const tax = totalTax(state);
  const totalAmmount = totalPrice(state);

  return (
    <div className="Page pt-3">
      <Container>
        <Row>
          {!carts.length && (
            <div className="w-100 my-5 text-center text-danger">
              <h3>
                You don't have any product in carts.{" "}
                <Link to="/products" className="text-dark text-decoration-none">
                  {" "}
                  Go for shoping{" "}
                </Link>
              </h3>
            </div>
          )}
          {carts.length > 0 &&
            carts.map((c) => {
              return (
                <Col sm="12" lg="12" key={c.id}>
                  <CartItemCard item={c} />
                </Col>
              );
            })}
        </Row>

        {carts.length > 0 && (
          <div className="my-3">
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-around ">
                  <div className="w-100 align-middle">
                    <h5 className="align-middle d-inline">
                      Subtotal: ${subTotal}
                    </h5>
                  </div>
                  <div className="w-100 ">
                    <h5 className="align-middle d-inline">Tax(2%): ${tax}</h5>
                  </div>
                  <div className="w-100 align-middle">
                    <h5 className="align-middle d-inline">
                      Total Price: ${totalAmmount.toFixed(2)}
                    </h5>
                  </div>
                  <div className="w-100 text-center">
                    <Button variant="success" className="align-middle d-inline" onClick={()=>{user ? (!checkout && updatecheck(true)): change({ login: true, reg: false })}}>
                      Checkout
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
      <Footer />
      {checkout && <Checkout checkout={checkout} updtcheck={updatecheck} />}
    </div>
  );
}

export default Cart;
