"use client";


import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import { store } from '../redux/store';

export default function ClientProvider({children:children}) {
  return (
      <>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </>
  )
}
