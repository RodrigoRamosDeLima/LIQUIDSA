import React from 'react'


function Login() {
  return (
    <div className="login-form">
        <h2>LOGIN</h2>
        <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="form-button">ENTRAR</button>
        </form>
    </div>
  )
}

export default Login