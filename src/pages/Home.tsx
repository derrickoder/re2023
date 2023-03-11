import * as React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
    <React.Fragment>
        Inside Home
        <Link to="/blog">blog</Link>
    </React.Fragment>
    );
};

export default Home;