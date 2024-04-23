import { Footer, Header } from '../components';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Simulated Login Validation
        if (formData.email === 'admin@example.com' && formData.password === 'admin') {
            // Simulate admin role
            setTimeout(() => { // Simulate network delay
                navigate("/admin");
                setLoading(false);
            }, 1000);
        } else if (formData.email === 'user@example.com' && formData.password === 'user') {
            // Simulate regular user role
            setTimeout(() => { // Simulate network delay
                navigate("/profile");
                setLoading(false);
            }, 1000);
        } else {
            setError('Invalid email or password.');
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <main className="container-fluid position-relative h-500px p-0">
                <div className="login-card h-50 w-50 font-color">
                    <form onSubmit={handleLogin} className="login-form align-item-center mb-0 d-flex position-static">
                        <h1 className="login-heading fs-5 lh-lg text-uppercase">Login</h1>
                        <input
                            type="email"
                            className="login-input font-color d-block my-2"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={onChangeHandler}
                            required />

                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="login-input font-color d-block my-2"
                            placeholder="Enter your password"
                            onChange={onChangeHandler}
                            required />

                        {error && <div className="alert alert-danger">{error}</div>}

                        <button
                            type="submit"
                            className="btn text-uppercase d-block my-2 py-3"
                            style={{ fontSize: 0.88 + 'rem' }}
                            disabled={loading}>
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login;
