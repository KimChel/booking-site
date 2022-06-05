import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./login.css"

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const { user, loading, error, dispatch } = useContext(AuthContext)

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("/auht/login", credentials)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }

        

    }
    console.log(user)

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