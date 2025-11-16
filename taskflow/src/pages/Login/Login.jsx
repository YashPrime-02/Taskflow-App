import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import './Login.css';

function Login() {
    const { login, signup } = useAuth();
    const [isSignup, setIsSignup] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', role: 'employee' });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isSignup) {
            signup(form); // simulate signup
        } else {
            login(form);  // simulate login
        }
    }

    function toggleForm() {
        setIsSignup((prev) => !prev);
    }
    function addRipple(e) {
        const rect = e.target.getBoundingClientRect();
        e.target.style.setProperty("--x", e.clientX - rect.left + "px");
        e.target.style.setProperty("--y", e.clientY - rect.top + "px");
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    {isSignup && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <select name="role" value={form.role} onChange={handleChange}>
                        <option value="employee">Employee</option>
                        <option value="admin">Admin</option>
                    </select>

                    <button type="submit" onClick={addRipple}>
                        {isSignup ? "Sign Up" : "Login"}
                    </button>


                    <button type="button" className="toggle-btn" onClick={toggleForm}>
                        {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );

}

export default Login;
