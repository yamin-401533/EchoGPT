import React from 'react';
import SignIn from '../components/SignIn';
import Navbar from '../components/Navbar';

const SignInPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <SignIn />
    </>
  );
};

export default SignInPage;