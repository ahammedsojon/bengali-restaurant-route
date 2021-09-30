import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <div>
                <h2>Welcome to MealDb Food Restaurant...</h2>
                <Link to="/restaurant">
                    <button className="btn btn-primary">See food items</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;