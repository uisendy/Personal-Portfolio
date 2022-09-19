import React from 'react';
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="bg-black flex flex-col gap-10 text-center justify-center text-white h-[100vh] w-full"
    >
      <h1 className=" text-5xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
