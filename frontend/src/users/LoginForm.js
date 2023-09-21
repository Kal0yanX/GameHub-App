import { useContext, useState } from "react"
import { useHistory } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser"

function LoginForm() {

    const history = useHistory()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

  
  
    async function handleSubmit(e) {
        e.preventDefault()
        const URL = `${process.env.REACT_APP_BACKEND_URI}/authentication/`
        const response = await fetch(URL , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            history.push(`/`)
        } else {
            setErrorMessage(data.message)
        }
    }

    return (
        <main>
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="username"
                            required
                            value={credentials.username}
                            onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                            className="form-control"
                            id="username"
                            name="username"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Log in" />
            </form>
        </main>
    )
}

export default LoginForm