import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ isSubmitting, setIsSubmitting ] = useState(false)
    const [ error, setError ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        if (!email || !password) {
            setError("Please fill in both email and password")
            return
        }

        setIsSubmitting(true)
        const result = await handleLogin({ email, password })
        setIsSubmitting(false)

        if (result?.success) {
            navigate('/')
        } else {
            setError(result?.error || "Login failed. Please check your credentials.")
        }
    }

    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                {error && <div className="auth-error-banner">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => { setEmail(e.target.value); setError("") }}
                            type="email"
                            id="email"
                            name='email'
                            placeholder='Enter email address'
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => { setPassword(e.target.value); setError("") }}
                            type="password"
                            id="password"
                            name='password'
                            placeholder='Enter password'
                            required
                        />
                    </div>
                    <button disabled={isSubmitting} className='button primary-button'>
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </form>
                <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
            </div>
        </main>
    )
}

export default Login