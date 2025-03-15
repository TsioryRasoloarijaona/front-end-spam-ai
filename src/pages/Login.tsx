import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';

const Login: React.FC = () => {
    return (
        <div>
            Hello, welcome to the home page!
            <Link to={'/signUp'} >sign up</Link>
            <Button>push here</Button>
        </div>
    );
}

export default Login;