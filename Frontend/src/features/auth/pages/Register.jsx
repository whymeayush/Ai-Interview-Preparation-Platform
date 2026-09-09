import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ isSubmitting, setIsSubmitting ] = useState(false)
    const [ error, setError ] = useState("")

    const { handleRegister } = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        if (!username || !email || !password) {
            setError("Please fill in username, email, and password")
            return
        }

        setIsSubmitting(true)
        const result = await handleRegister({ username, email, password })
        setIsSubmitting(false)

        if (result?.success) {
            navigate("/")
        } else {
            setError(result?.error || "Registration failed. Please try again.")
        }
    }

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                {error && <div className="auth-error-banner">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => { setUsername(e.target.value); setError("") }}
                            type="text"
                            id="username"
                            name='username'
                            placeholder='Enter username'
                            required
                        />
                    </div>
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
                        {isSubmitting ? "Creating account..." : "Register"}
                    </button>
                </form>

                <p>Already have an account? <Link to={"/login"}>Login</Link></p>
            </div>
        </main>
    )
}

export default Register