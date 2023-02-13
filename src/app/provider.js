'use client';

import React from 'react';
import { StoreProvider } from '@/store';

function Provider({ children }) {
  return <StoreProvider>{children}</StoreProvider>;
}

export default Provider;
