import React, { useState } from 'react';
import SignUp from '../components/SignUp';
import Navbar from '../components/Navbar';

const SignUpPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <SignUp />
    </>
  );
};

export default SignUpPage;