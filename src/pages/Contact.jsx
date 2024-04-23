import { useState } from 'react';
import { Footer, Header } from '../components';

const Contact = () => {
    const initialData = {
        name: "",
        email: "",
        message: ""
    };

    const [formData, setFormData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");  // State to handle messages to the user

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitContactForm = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(""); // Clear previous messages

        // Simulate sending message
        setTimeout(() => {
            setMessage("Message Sent Successfully!"); // Success message
            setFormData(initialData); // Reset form to initial state
            setLoading(false);
        }, 1000);
    };

    return (
        <>
            <Header />
            <main className="container-fluid mt-3 p-0">
                <div className="row g-3">
                    <div className="col-lg-6">
                        <div className="banner-image position-relative overflow-hidden h-100">
                            <img className="object-fit-cover w-100 h-100" src="https://cdn.prod.website-files.com/63cffb7c16ab3347fc9734c8/63d3aa0593749b572bd7d9b2_contact-hero-p-800.webp" alt="Contact Banner" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card container-fluid h-100 p-4">
                            <div className="card-body p-4">
                                <p className="product-card-price text-uppercase font-color mb-0">Contact</p>
                                <h1 className="card-heading text-uppercase font-color mb-5 pb-3">Let's Get <br />in Touch</h1>
                                {message && <div className="alert alert-success">{message}</div>}
                                <form onSubmit={submitContactForm} className="contact-form">
                                    <input
                                        type="text"
                                        className="login-input font-color d-block w-100 my-3"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={onChangeHandler}
                                        placeholder="Enter your name"
                                        required />

                                    <input
                                        type="email"
                                        className="login-input font-color d-block w-100 my-3"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={onChangeHandler}
                                        placeholder="Enter your email"
                                        required />

                                    <textarea
                                        className="login-input font-color d-block w-100 my-3 p-3"
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={onChangeHandler}
                                        cols="30" rows="6"
                                        placeholder="Enter your message"
                                        required></textarea>

                                    <button
                                        type="submit"
                                        className="btn text-uppercase d-block my-2 py-3 w-100 fw-bold"
                                        style={{ fontSize: 0.88 + 'rem' }}
                                        disabled={loading}>
                                        {loading ? (
                                            <>
                                                <span className="spinner-grow spinner-grow-sm text-dark me-2" aria-hidden="true"></span>
                                                <span role="status">Sending...</span>
                                            </>
                                        ) : "Send Message"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Contact;
