import React from 'react';
import { ContactosProvider } from './store';

const ContextWrapper = ({ children }) => {
  return <ContactosProvider>{children}</ContactosProvider>;
};

export default ContextWrapper;
