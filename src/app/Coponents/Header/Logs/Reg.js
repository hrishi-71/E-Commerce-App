import React, { useState } from 'react'
import './Reg.css'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../Features/Logs/LogsSlice'

const Reg = ({ form, cancle }) => {
    const Users = useSelector((state) => state.logs)
    const dispatch = useDispatch()
    const [val, setVal] = useState({ name: '', Lname: '', username: '', password: '', Cpassword: '' })
    const userInfo = { Username: val.username, Fname: val.name, Lname: val.Lname, pass: val.password, logged: false, address: [] }
    const reg = (e) => {
        e.preventDefault();
        if (Users[val.username] === undefined) {
            if (val.Cpassword === val.password) {
                dispatch(register({ key: val.username, value: userInfo }))
                alert('You are registered')
                cancle({ ...form, reg: false })
            } else {
                alert('Password dose not match, TRY AGAIN!')
                setVal({ ...val, password: '', Cpassword: '' })
            }
        } else {
            alert(`${val.username} is already taken!`)
        }
    }
    return (
        <div id='Register'>
            <div className="form">
                <button type='button' id='cancel' onClick={() => { cancle({ ...form, reg: false }) }}>✕</button>
                <form>
                    <fieldset>
                        <legend><img src="log.png" alt="img" /></legend>
                        {/* <!-- firstname --> */}
                        <div className="mb-3">
                            <label htmlFor="Fname" className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Fname"
                                value={val.name}
                                onChange={(e) => setVal({ ...val, name: e.target.value })}
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        {/* <!-- lastname --> */}
                        <div className="mb-3">
                            <label htmlFor="Lname" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Lname"
                                value={val.Lname}
                                onChange={(e) => setVal({ ...val, Lname: e.target.value })}
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                        {/* <!-- Username --> */}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={val.username}
                                onChange={(e) => setVal({ ...val, username: e.target.value.toLowerCase() })}
                                placeholder="Set your username"
                                required
                            />
                        </div>
                        {val.username.length > 0 && (Users ? (val.username in Users ? <div className='errMsg'>Username not available!</div> : <div className='okmsg'>✓</div>) : <div className='okmsg'>✓</div>)}

                        {/* <!-- Password --> */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={val.password}
                                onChange={(e) => setVal({ ...val, password: e.target.value })}
                                placeholder="Set password"
                                required
                            />
                        </div>
                        {/* <!-- confirm Password --> */}
                        <div className="mb-3">
                            <label htmlFor="Cpassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="Cpassword"
                                value={val.Cpassword}
                                onChange={(e) => setVal({ ...val, Cpassword: e.target.value })}
                                placeholder="Confirm password"
                                required
                            />
                        </div>
                        {val.Cpassword.length > 0 && (val.Cpassword === val.password ? <div className='okmsg'>✓</div> : <div className='errMsg'>Password does not match!</div>)}

                        {/* <!-- Submit Button --> */}
                        <button type="submit" className="btn btn-primary" onClick={(e) => reg(e)}>
                            Register
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Reg
