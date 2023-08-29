import React from 'react'
import { Form } from './Login.st'
import LoginImg from "../../assets/login.png"

const Login = () => {
  return (
    <Form logincover={LoginImg}>
        <div className="content-block">
            <div className="img"></div>
            <div className="form">
                <div className="title">Hello, Welcome Back!</div>
                <div className="label">Email</div>
                <input type="text" />
                <div className="label">Password</div>
                <input type="text" />
            </div>
        </div>
    </Form>
  )
}

export default Login