import { CircularProgress } from '@mui/material';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}=useAuth()
    if(isLoading){
        return <CircularProgress></CircularProgress>
    }
    return (
      <Route
      {...rest}
      render={({location})=>
    user.email? ( children):
    (
        <Redirect
        to={
            {
                pathname:'/login',
                state:{from: location}
            }
        }
        
        >

        </Redirect>
    )

      }
      
      />
          
    );
};

export default PrivateRoute;