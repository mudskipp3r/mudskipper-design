import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
    return (
        <>
            <div>I'm the homescreen</div>
            <Link to="/HIA">HIA</Link>
        </>
    );
}

export default HomeScreen;
