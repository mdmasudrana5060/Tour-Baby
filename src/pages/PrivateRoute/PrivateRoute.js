import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="boarder" variant='danger'></Spinner>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}

                    ></Redirect>

            }
        >

        </Route>

    );
};

export default PrivateRoute;