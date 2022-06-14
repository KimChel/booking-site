import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import "./login.css"

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const {loading, error, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, credentials)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }
    }

    return <div className="login">
        <div className="loginContainer">
            <input type="text" placeholder="username" id="username" onChange={handleChange} className="loginInput" />
            <input type="password" placeholder="password" id="password" onChange={handleChange} className="loginInput" />
            <button onClick={handleClick} className="loginButton">Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
}

export default Login