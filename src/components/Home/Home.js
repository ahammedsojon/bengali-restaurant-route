import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <div>
                <h2>Welcome to Bengali Food Restaurant...</h2>
                <Link to="/restaurant">
                    <button className="btn btn-danger mt-3">See food items</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;