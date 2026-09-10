import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const { handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ showPassword, setShowPassword ] = useState(false)
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
            navigate('/app')
        } else {
            setError(result?.error || "Login failed. Please check your credentials.")
        }
    }

    return (
        <div className='auth-layout'>
            {/* Left Hero Brand Panel */}
            <div className='auth-hero-panel'>
                <div className='auth-hero-content'>
                    <Link to='/' className='auth-brand-logo'>
                        <span className='logo__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </span>
                        <span className='logo__text'>Interview<span className='highlight'>.AI</span></span>
                    </Link>

                    <div className='auth-hero-text'>
                        <span className='hero-pill'>Welcome Back</span>
                        <h2>Master Your Next Tech Interview with Precision</h2>
                        <p>Sign in to access your saved interview preparation roadmaps, customized questions, and ATS resumes.</p>
                    </div>

                    <div className='auth-features-list'>
                        <div className='auth-feature-item'>
                            <div className='feature-bullet'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                            <span>Personalized Day-by-Day Preparation Plans</span>
                        </div>
                        <div className='auth-feature-item'>
                            <div className='feature-bullet'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                            <span>Technical &amp; Behavioral Questions with Model Answers</span>
                        </div>
                        <div className='auth-feature-item'>
                            <div className='feature-bullet'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                            <span>1-Click Tailored ATS PDF Resume Export</span>
                        </div>
                    </div>

                    <div className='auth-testimonial'>
                        <p className='testimonial-quote'>"Interview.AI helped me spot my exact skill gaps for a Senior Backend role in 30 seconds."</p>
                        <div className='testimonial-author'>
                            <div className='author-avatar'>A</div>
                            <div>
                                <strong>Ayush T.</strong>
                                <span>Software Engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Form Panel */}
            <div className='auth-form-panel'>
                <div className='auth-card'>
                    <div className='auth-card__header'>
                        <Link to='/' className='mobile-logo'>
                            <span>Interview<span className='highlight'>.AI</span></span>
                        </Link>
                        <h1>Sign In</h1>
                        <p>Enter your credentials to access your interview workspace</p>
                    </div>

                    {error && (
                        <div className='auth-error-banner'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className='auth-form'>
                        <div className='input-group'>
                            <label htmlFor='email'>Email Address</label>
                            <div className='input-wrapper'>
                                <span className='input-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                </span>
                                <input
                                    onChange={(e) => { setEmail(e.target.value); setError("") }}
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='name@company.com'
                                    value={email}
                                    required
                                />
                            </div>
                        </div>

                        <div className='input-group'>
                            <label htmlFor='password'>Password</label>
                            <div className='input-wrapper'>
                                <span className='input-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                </span>
                                <input
                                    onChange={(e) => { setPassword(e.target.value); setError("") }}
                                    type={showPassword ? 'text' : 'password'}
                                    id='password'
                                    name='password'
                                    placeholder='••••••••'
                                    value={password}
                                    required
                                />
                                <button
                                    type='button'
                                    className='password-toggle'
                                    onClick={() => setShowPassword(!showPassword)}
                                    title={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <button disabled={isSubmitting} className='btn-submit'>
                            {isSubmitting ? (
                                <span className='btn-spinner-wrap'>
                                    <span className='spinner' />
                                    <span>Signing in...</span>
                                </span>
                            ) : (
                                <span>Sign In to Dashboard</span>
                            )}
                        </button>
                    </form>

                    <div className='auth-card__footer'>
                        <p>Don't have an account? <Link to='/register' className='auth-link'>Create Account</Link></p>
                        <Link to='/' className='back-home-link'>&larr; Back to Homepage</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login