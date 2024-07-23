import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError(); // Get the error from the route
  console.error('Route Error:', error);

  return (
    <div>
      <h1>Unexpected Application Error!</h1>
      <p>{error.statusText || error.message || 'Something went wrong'}</p> {/* Display error message */}
    </div>
  );
};

export default ErrorBoundary;
