import React from 'react';

const NotFound = () => {
    const custom ={
        height:"450px",
    }
    return (
        <div>
            <h1 style={custom} className="text-danger my-4">404 NOT FOUND</h1>
        </div>
    );
};

export default NotFound;