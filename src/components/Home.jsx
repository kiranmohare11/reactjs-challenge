import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div className='box'>
            <div className='links-box'>
            <Link to="/users" className="home-links">
                Users
            </Link>
            <Link to="/posts" className="home-links">
                Posts
            </Link>
            <Link to="/" className="home-links">
                Home
            </Link>
            </div>
        </div>
    );
}

export default Home;