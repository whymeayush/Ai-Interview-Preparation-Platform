import React from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../features/auth/hooks/useAuth'
import './navbar.scss'

const Navbar = () => {
    const { user, handleLogout } = useAuth()
    const navigate = useNavigate()

    const onSignOut = async () => {
        await handleLogout()
        navigate('/login')
    }

    return (
        <header className='app-navbar'>
            <div className='navbar__container'>
                <Link to='/' className='navbar__logo'>
                    <span className='logo__icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                    </span>
                    <span className='logo__text'>Interview<span className='highlight'>.AI</span></span>
                </Link>

                {user && (
                    <div className='navbar__actions'>
                        <Link to='/app' className='navbar__new-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                            <span>New Plan</span>
                        </Link>
                        <div className='user-badge'>
                            <span className='user-avatar'>{user.username?.charAt(0).toUpperCase() || 'U'}</span>
                            <span className='user-name'>{user.username}</span>
                        </div>
                        <button onClick={onSignOut} className='navbar__logout-btn' title='Sign out of your account'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1="21" y1="12" x2="9" y2="12" />
                            </svg>
                            <span>Sign Out</span>
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar
