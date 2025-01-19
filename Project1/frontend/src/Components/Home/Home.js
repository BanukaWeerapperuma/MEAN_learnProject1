import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="home-page">
            <header className="hero">
                <h1>Welcome to Account management system</h1>
                <p>Your one-stop solution for user account management!</p>
                <p>Sign up now to get started.</p>
                
                <Link to="/regi" className="btn register-btn">
  Register
</Link>


                <p>Already have an account? <Link to="/login" className="btn register-btn" >Login</Link></p>
                
            </header>

            <main>
                <section className="features">
                    <h2>Features</h2>
                    <div className="feature-cards">
                        <div className="card">
                            <h3>Secure Login</h3>
                            <p>Experience a seamless and secure login system.</p>
                        </div>
                        <div className="card">
                            <h3>Manage Accounts</h3>
                            <p>Easily create, update, and manage user accounts.</p>
                        </div>
                        <div className="card">
                            <h3>Responsive Design</h3>
                            <p>Enjoy an optimized user experience on any device.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2025 Account management system. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
