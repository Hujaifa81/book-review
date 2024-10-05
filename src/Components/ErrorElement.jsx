import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const error = useRouteError();
    
    return (
        <div>
            {
                error.status===404 && <h1 className='font-bold text-6xl flex justify-center items-center min-h-screen'>404!!!</h1>
            }
        </div>
    );
};

export default ErrorElement;