import React, { useState, useEffect } from 'react'
import './Checkout.css'
import { useDispatch, useSelector } from 'react-redux'
import { updtAdd } from '../../Features/Logs/LogsSlice'

const Checkout = ({checkout, updtcheck}) => {
  const [New, UpdateNew] = useState(false)
  const [Address, uAddress] = useState({
    line1: '',
    line2: '',
    state: '',
    Pin: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiry: '', cvv: '' })

  const dispatch = useDispatch()
  const Users = useSelector((state) => state.logs)
  const [USER, setuser] = useState({ username: '', userAdd: [] })

  useEffect(() => {
    for (let usernameKey in Users) {
      const user = Users[usernameKey];
      if (user.logged) {
        setuser({ username: user.Username, userAdd: user.address })
        break;
      }
    }
  }, [Users])

  const newAddress = { line1: Address.line1, line2: Address.line2, state: Address.state, pin: Address.Pin }
  const updatedAdd = [...USER.userAdd, newAddress]

  const Update = (e) => {
    e.preventDefault()
    if (USER.userAdd.length > 0) {
      dispatch(updtAdd({ user: USER.username, upAdd: updatedAdd }))
    } else {
      dispatch(updtAdd({ user: USER.username, upAdd: [newAddress] }))
    }
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    if (paymentMethod === 'card') {
      if (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv) {
        alert('Please fill in all card details')
        return
      }
    }
    alert(`Order placed successfully with ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card Payment'}`)
    updtcheck(false)
  }

  return (
    <div id='checkout' className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 addShadow">
          <div className="card shadow-sm p-4">
            <h4 className="mb-4 text-center">Checkout</h4>

            {/* Delivery Address Section */}
            <div className="mb-3">
              <h5 className="mb-3">Delivery Address</h5>
              {USER.userAdd.length > 0 && USER.userAdd.map((add, index) => (
                <div className="form-check mb-2" key={index}>
                  <input className="form-check-input" type="radio" name="address" id={`address-${index}`} />
                  <label className="form-check-label" htmlFor={`address-${index}`}>
                    {`${add.line1}, ${add.line2}, ${add.pin}, ${add.state}`}
                  </label>
                </div>
              ))}
              <button
                className={`btn ${New ? 'btn-outline-danger' : 'btn-outline-primary'} btn-sm mt-2`}
                onClick={() => UpdateNew(!New)}
              >
                {New ? `Cancel` : `+ New Delivery Address`}
              </button>
            </div>

            {/* New Address Form */}
            {New && (
              <form className="border rounded p-3 mb-3 bg-light">
                <div className="mb-2">
                  <label htmlFor="line1" className="form-label">House/Society/Street</label>
                  <input type="text" id="line1" className="form-control"
                    value={Address.line1} onChange={(e) => uAddress({ ...Address, line1: e.target.value })}
                    placeholder="Enter address line 1" required />
                </div>
                <div className="mb-2">
                  <label htmlFor="line2" className="form-label">Area/City</label>
                  <input type="text" id="line2" className="form-control"
                    value={Address.line2} onChange={(e) => uAddress({ ...Address, line2: e.target.value })}
                    placeholder="Enter address line 2" required />
                </div>
                <div className="mb-2">
                  <label htmlFor="State" className="form-label">State</label>
                  <input type="text" id="State" className="form-control"
                    value={Address.state} onChange={(e) => uAddress({ ...Address, state: e.target.value })}
                    placeholder="Enter state" required />
                </div>
                <div className="mb-2">
                  <label htmlFor="pincode" className="form-label">Pincode</label>
                  <input type="number" id="pincode" className="form-control"
                    value={Address.Pin} onChange={(e) => uAddress({ ...Address, Pin: e.target.value })}
                    placeholder="Enter pincode" required />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-2" onClick={(e) => Update(e)}>Save Address</button>
              </form>
            )}

            {/* Payment Options */}
            <div className="mb-3">
              <h5 className="mb-3">Payment Method</h5>
              <div className="form-check mb-2">
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="form-check-input"
                />
                <label htmlFor="cod" className="form-check-label">Cash on Delivery</label>
              </div>
              <div className="form-check mb-2">
                <input
                  type="radio"
                  id="card"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="form-check-input"
                />
                <label htmlFor="card" className="form-check-label">Card Payment</label>
              </div>

              {/* Card Payment Form */}
              {paymentMethod === 'card' && (
                <div className="bg-light p-3 rounded mt-2">
                  <div className="mb-2">
                    <label>Card Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter card number"
                      value={cardDetails.cardNumber}
                      onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                    />
                  </div>
                  <div className="row">
                    <div className="col-6 mb-2">
                      <label>Expiry Date</label>
                      <input
                        type="month"
                        className="form-control"
                        value={cardDetails.expiry}
                        onChange={(e) => {
                          const [year, month] = e.target.value.split("-");
                          const formatted = `${month}/${year.slice(-2)}`; // MM/YY
                          setCardDetails({ ...cardDetails, expiry: formatted });
                        }}
                      />

                    </div>
                    <div className="col-6 mb-2">
                      <label>CVV</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="CVV"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Place Order Button */}
            <button className="btn btn-success w-100 mt-3" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
