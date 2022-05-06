import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
    const { googleSignIn, setError } = useAuth();
    const location = useLocation();

    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setError('');

                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);

            })
    }
    return (
        <div className='login'>
            <h2 className='login-header'>Please LogIn</h2>
            <Button onClick={handleGoogleSignIn} variant="success">GOOGLE SIGNIN</Button>

        </div>
    );
};

export default LogIn;