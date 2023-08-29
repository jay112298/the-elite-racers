import React from 'react'
import { Form } from './Login.st'
import LoginImg from "../../assets/login.png"
import { Link } from 'react-router-dom'
import google from "../../assets/google.svg"
import terSilver from "../../assets/ter-silver.png"

const Login = () => {
  return (
    <Form logincover={LoginImg}>
        <div className="content-block">
            <div className="img">
              <div className="logo">
                <img src={terSilver} alt="Logo-Silver" />
              </div>
              <div className="slogan">race like you mean it.</div>
            </div>
            <div className="form-section">
                <div className='form-area'>
                  <div className="title">Hello, Welcome Back!</div>
                  <div className="label">Email</div>
                  <input type="text" />
                  <div className="label">Password</div>
                  <input type="password" />
                  <button>Log In</button>
                  <div className="forgot-pass"><Link to="/forgot-password">Forgot Password?</Link></div>
                  <div className="or-sec">
                    <div className='dash'></div>
                    <div>or</div>
                    <div className='dash'></div>
                  </div>
                  <div className="google-link">
                    <div className="google"><img src={google} alt="" /></div>
                    <div className="text">Continue with Google</div>
                  </div>
                  <div className="signup-link">Don't Have An Account? <Link>Sign Up</Link></div>
                </div>
            </div>
        </div>
    </Form>
  )
}

export default Login