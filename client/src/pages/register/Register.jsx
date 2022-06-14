import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Register = () => {

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    })


    const {loading, error, dispatch } = useContext(AuthContext)

    const handleChange = (e) => {
        const { username, email, password } = e.target
        setCredentials({
            [username]:username,
            [email]:email,
            [password]:password
        })
    }


    const register = () => {
        const { username, email, password } = credentials
        if (username && email && password) {
            axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, credentials)
                .then(res => console.log(res))
        }
        else {
            alert("invalid input")
        }
    }


    return (
        <div className="registerContainer">
            <input type="text" placeholder="username" id="username" username = {credentials.username} onChange={handleChange} className="registerInput" />
            <input type="text" placeholder="email" id="email" email = {credentials.email} onChange={handleChange} className="registerInput" />
            <input type="password" placeholder="password" id="password" password = {credentials.password} onChange={handleChange} className="registerInput" />
            <button onClick={register} className="registerButton">Register</button>
            {error && <span>{error.message}</span>}
        </div>
    )
}

export default Register