import React from 'react';
import { Header } from '@/components/header';

const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AuthLayout;
