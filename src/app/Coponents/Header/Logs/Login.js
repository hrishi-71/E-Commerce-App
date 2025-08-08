import React, { useState } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../Features/Logs/LogsSlice'

const Login = ({ form, cancle }) => {
    const [val, setVal] = useState({ username: '', password: '' })
    const User = useSelector((state) => state.logs)
    const dispatch = useDispatch()
    const logIn = (e)=>{
        e.preventDefault()
        if(val.username in User){
            if(val.password === User[val.username].pass){
                dispatch(login(val.username))
                cancle({ ...form, login: false })
            }else{
                alert('Incorrect Password')
            }
        }else{
            alert(`${val.username} is not registered`)
        }
    }
    return (
        <div id='Login'>
            <div className="form">
                <button type='button' id='cancel' onClick={() => { cancle({ ...form, login: false }) }}>✕</button>
                <form>
                    <fieldset>
                        <legend><img src="log.png" alt="img" /></legend>
                        {/* <!-- Username --> */}
                        <div className="mb-4">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter your username"
                                value={val.username}
                                onChange={(e) => setVal({ ...val, username: e.target.value.toLowerCase() })}
                                required
                            />
                        </div>

                        {/* <!-- Password --> */}
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                value={val.password}
                                onChange={(e) => setVal({ ...val, password: e.target.value })}
                                required
                            />
                        </div>

                        {/* <!-- Submit Button --> */}
                        <button type="submit" className="btn btn-primary" onClick={(e)=>logIn(e)}>
                            Login
                        </button>
                        <div className='same' onClick={()=>{ cancle({ reg:true , login: false }) }}>Register here!</div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login
