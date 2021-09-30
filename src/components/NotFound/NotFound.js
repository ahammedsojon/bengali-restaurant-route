import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <h2>404</h2>
                <h3>Page Not Found</h3>
                <Link to="/home">Back to home</Link>
            </div>
        </div>
    );
};

export default NotFound;