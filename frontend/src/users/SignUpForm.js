import { useState, useEffect, useContext } from "react"
import { useHistory, useParams } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser"

function SignUpForm() {

    const history = useHistory()
    const { setCurrentUser } = useContext(CurrentUser)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const URL = `${process.env.REACT_APP_BACKEND_URI}/user/`
        console.log(user)
        const response = await fetch(URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        console.log(response)
        const data = await response.json();
        if (response.status === 201) {
            setCurrentUser(data.user)
            history.push(`/`)
        } else {
            setErrorMessage(data.message)
        }
    }

    return (
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                {/* <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="username"
                            required
                            value={user.username}
                            onChange={e => setUser({ ...user, username: e.target.value })}
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
                            value={user.password}
                            onChange={e => setUser({ ...user, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>

                </div> */}
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">Username</label>
                        <input
                            type="email"
                            required
                            value={user.email}
                            onChange={e => setUser({ ...user, email: e.target.value })}
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
        <label htmlFor="password">Password</label>
        <input
            type="password"
            required
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
            className="form-control"
            id="password"
            name="password"
        />
    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Sign Up" />
            </form>
        </main>
    )
}

export default SignUpForm