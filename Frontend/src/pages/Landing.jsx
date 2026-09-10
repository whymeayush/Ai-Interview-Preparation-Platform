import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../features/auth/hooks/useAuth'
import './landing.scss'

const FAQS = [
    {
        q: "How does Interview.AI generate my interview plan?",
        a: "Our system uses Google Gemini AI to analyze your resume against the target job description. It calculates your match score, detects skill gaps, and generates targeted technical & behavioral questions with model answers and a day-by-day roadmap."
    },
    {
        q: "Is my resume data safe and private?",
        a: "Yes, 100%. We never sell, share, or monetize your resume or personal details with third-party recruiters or advertising networks."
    },
    {
        q: "Can I download a tailored ATS resume?",
        a: "Yes! Based on the job description and your strengths, you can generate and download a clean, ATS-optimized PDF resume directly from your interview plan page."
    },
    {
        q: "What if I don't have my resume file ready?",
        a: "You can simply type a quick self-description of your experience, tech stack, and achievements. Our AI will craft a customized plan from that description."
    }
]

const Landing = () => {
    const { user, handleLogout } = useAuth()
    const navigate = useNavigate()
    const [ openFaq, setOpenFaq ] = useState(0)

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    return (
        <div className='landing-page'>
            {/* Top Navigation */}
            <nav className='landing-nav'>
                <div className='landing-nav__container'>
                    <Link to='/' className='landing-nav__logo'>
                        <span className='logo__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        </span>
                        <span className='logo__text'>Interview<span className='highlight'>.AI</span></span>
                    </Link>

                    <div className='landing-nav__links'>
                        <a href='#what-we-do'>What We Do</a>
                        <a href='#comparison'>Why Us</a>
                        <a href='#how-it-works'>How It Works</a>
                        <a href='#faq'>FAQ</a>
                    </div>

                    <div className='landing-nav__actions'>
                        {user ? (
                            <>
                                <Link to='/app' className='btn btn--primary'>
                                    <span>Go to Dashboard</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                                </Link>
                                <button onClick={handleLogout} className='btn btn--ghost'>Sign Out</button>
                            </>
                        ) : (
                            <>
                                <Link to='/login' className='btn btn--ghost'>Log In</Link>
                                <Link to='/register' className='btn btn--primary'>
                                    <span>Get Started Free</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className='hero-section'>
                <div className='hero-glow' />
                <div className='hero-badge'>
                    <span className='sparkle'>✨</span>
                    <span>AI-Powered Interview Intelligence &bull; Gemini 3.0</span>
                </div>

                <h1 className='hero-title'>
                    Stop Guessing. <br />
                    <span className='gradient-text'>Ace Your Tech Interviews</span> with Precision.
                </h1>

                <p className='hero-subtitle'>
                    Transform any target job description and your resume into a personalized interview battle-plan:
                    real technical questions, interviewer intentions, model answers, ATS resume tailoring, and day-by-day roadmaps.
                </p>

                <div className='hero-cta'>
                    <Link to={user ? '/app' : '/register'} className='btn btn--hero-primary'>
                        <span>{user ? 'Open Strategy Workspace' : 'Build Your Free Interview Plan'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </Link>
                    <a href='#comparison' className='btn btn--hero-secondary'>
                        <span>Explore Features</span>
                    </a>
                </div>

                {/* Hero Interactive Mockup Showcase */}
                <div className='hero-showcase'>
                    <div className='showcase-card showcase-card--main'>
                        <div className='showcase-header'>
                            <div className='window-dots'>
                                <span className='dot dot--red' />
                                <span className='dot dot--yellow' />
                                <span className='dot dot--green' />
                            </div>
                            <span className='showcase-title'>AI Strategy Report Preview &bull; Senior Frontend Engineer</span>
                            <span className='badge badge--live'>LIVE DEMO</span>
                        </div>

                        <div className='showcase-body'>
                            <div className='preview-score'>
                                <div className='score-circle'>
                                    <span className='score-num'>92</span>
                                    <span className='score-pct'>%</span>
                                </div>
                                <div className='score-info'>
                                    <h4>Profile Match Score</h4>
                                    <p>Strong candidate profile for targeted Senior Role</p>
                                </div>
                            </div>

                            <div className='preview-qcard'>
                                <div className='qcard-top'>
                                    <span className='q-tag'>Technical Q1</span>
                                    <h5>How would you optimize React state management in a high-frequency real-time dashboard?</h5>
                                </div>
                                <div className='qcard-details'>
                                    <div className='detail-pill intention'>
                                        <strong>Interviewer Intention:</strong> Evaluates deep understanding of React render cycles, memoization, and selective store subscriptions.
                                    </div>
                                    <div className='detail-pill answer'>
                                        <strong>Model Answer:</strong> Segment atomic state (Zustand/Jotai), throttle WebSocket streams, and use web workers for heavy parsing.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* What We Do vs What We Don't Section */}
            <section id='comparison' className='section comparison-section'>
                <div className='section-header'>
                    <span className='section-tag'>TRANSPARENT &amp; HONEST</span>
                    <h2>What We Do <span className='vs'>VS</span> What We DON'T Do</h2>
                    <p>We built this platform to cut through the fluff and prepare you for real-world hiring bars.</p>
                </div>

                <div className='comparison-grid'>
                    {/* What We Do Column */}
                    <div className='comp-card comp-card--positive'>
                        <div className='comp-card__header'>
                            <div className='comp-icon comp-icon--check'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            <h3>What We DO</h3>
                        </div>
                        <ul className='comp-list'>
                            <li>
                                <div className='item-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                                <div>
                                    <strong>Deep JD &amp; Resume Gap Analysis:</strong>
                                    <p>Extracts exact tech requirements and highlights specific missing skills you must prepare for.</p>
                                </div>
                            </li>
                            <li>
                                <div className='item-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                                <div>
                                    <strong>Reveals Interviewer Intentions:</strong>
                                    <p>Tells you *why* an interviewer is asking each question so you hit the exact evaluation rubric.</p>
                                </div>
                            </li>
                            <li>
                                <div className='item-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                                <div>
                                    <strong>Structured Day-Wise Roadmaps:</strong>
                                    <p>Breaks down preparation into actionable, realistic daily goals from Day 1 to your interview date.</p>
                                </div>
                            </li>
                            <li>
                                <div className='item-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                                <div>
                                    <strong>ATS-Tailored Resume PDF Generator:</strong>
                                    <p>Generates a professional, customized ATS-friendly resume formatted specifically for your target job.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* What We Don't Do Column */}
                    <div className='comp-card comp-card--negative'>
                        <div className='comp-card__header'>
                            <div className='comp-icon comp-icon--cross'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </div>
                            <h3>What We DON'T Do</h3>
                        </div>
                        <ul className='comp-list'>
                            <li>
                                <div className='item-icon cross'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
                                <div>
                                    <strong>No Generic 2015 Question Dumps:</strong>
                                    <p>We don't give you static lists of outdated trivia. Everything is tailored specifically to your JD.</p>
                                </div>
                            </li>
                            <li>
                                <div className='item-icon cross'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
                                <div>
                                    <strong>No Data Harvesting or Selling:</strong>
                                    <p>We never monetize your resume or pass your information to third-party headhunters.</p>
                                </div>
                            </li>
                            <li>
                                <div className='item-icon cross'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
                                <div>
                                    <strong>No Predatory Hidden Paywalls:</strong>
                                    <p>No sudden traps or locked core features after you've spent 20 minutes creating your profile.</p>
                                </div>
                            </li>
                            <li>
                                <div className='item-icon cross'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
                                <div>
                                    <strong>No Hallucinated Fluff:</strong>
                                    <p>No vague jargon without concrete steps, code approaches, or actionable answer frameworks.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section id='what-we-do' className='section features-section'>
                <div className='section-header'>
                    <span className='section-tag'>POWERED BY ADVANCED AI</span>
                    <h2>Engineered for High-Stakes Tech Interviews</h2>
                    <p>Every tool you need to walk into your next interview with complete confidence.</p>
                </div>

                <div className='features-grid'>
                    <div className='feature-card'>
                        <div className='feature-icon'>🎯</div>
                        <h3>Match Score &amp; Skill Gaps</h3>
                        <p>Immediate percentage readiness score with severity flags (High, Medium, Low) for skills you need to brush up on.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-icon'>💡</div>
                        <h3>Technical &amp; System Design Q&amp;A</h3>
                        <p>Curated technical questions tailored directly to the required stack, complete with interviewer expectations and model answers.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-icon'>🤝</div>
                        <h3>Behavioral &amp; Leadership Scenarios</h3>
                        <p>STAR-method structured answers to behavioral questions that demonstrate leadership, conflict resolution, and ownership.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-icon'>📅</div>
                        <h3>Personalized Preparation Roadmap</h3>
                        <p>Day-wise focused study plan breaking down complex topics into bite-sized daily actionable objectives.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-icon'>📄</div>
                        <h3>ATS-Optimized Resume Tailoring</h3>
                        <p>Generate a customized, professional HTML/PDF resume tuned to bypass automated screening filters with high match rates.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-icon'>⚡</div>
                        <h3>Instant Generation in 30 Seconds</h3>
                        <p>Powered by ultra-fast Google Gemini Flash models to give you comprehensive interview plans without the wait.</p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id='how-it-works' className='section steps-section'>
                <div className='section-header'>
                    <span className='section-tag'>HOW IT WORKS</span>
                    <h2>3 Simple Steps to Interview Readiness</h2>
                </div>

                <div className='steps-grid'>
                    <div className='step-card'>
                        <div className='step-number'>01</div>
                        <h3>Paste Job &amp; Upload Resume</h3>
                        <p>Copy the job description from LinkedIn, Indeed, or company career page and upload your current resume or experience summary.</p>
                    </div>

                    <div className='step-card'>
                        <div className='step-number'>02</div>
                        <h3>AI Analyzes &amp; Generates Strategy</h3>
                        <p>Gemini AI evaluates the role's nuances, detects your edge, and generates custom questions, model answers, and a preparation timeline.</p>
                    </div>

                    <div className='step-card'>
                        <div className='step-number'>03</div>
                        <h3>Practice, Prepare &amp; Win</h3>
                        <p>Follow your customized day-by-day plan, rehearse top behavioral &amp; technical questions, and download your tailored resume.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id='faq' className='section faq-section'>
                <div className='section-header'>
                    <span className='section-tag'>GOT QUESTIONS?</span>
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div className='faq-accordion'>
                    {FAQS.map((faq, i) => (
                        <div key={i} className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
                            <button className='faq-question' onClick={() => toggleFaq(i)}>
                                <span>{faq.q}</span>
                                <span className='faq-chevron'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                                </span>
                            </button>
                            {openFaq === i && (
                                <div className='faq-answer'>
                                    <p>{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className='cta-banner'>
                <div className='cta-banner__content'>
                    <h2>Ready to Land Your Dream Tech Offer?</h2>
                    <p>Build your customized interview strategy in under 30 seconds. No credit card required.</p>
                    <Link to={user ? '/app' : '/register'} className='btn btn--cta-glow'>
                        <span>{user ? 'Go to Strategy Dashboard' : 'Get Started for Free'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className='landing-footer'>
                <div className='landing-footer__container'>
                    <div className='footer-brand'>
                        <span className='logo__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </span>
                        <span>Interview<span className='highlight'>.AI</span></span>
                        <p>&copy; {new Date().getFullYear()} Interview.AI. All rights reserved.</p>
                    </div>

                    <div className='footer-links'>
                        <a href='#what-we-do'>Features</a>
                        <a href='#comparison'>What We Do vs Don't</a>
                        <Link to='/login'>Sign In</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Landing
