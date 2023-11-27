import '@/styles/globals.css';
import { useEffect } from 'react';
// import firebase from 'firebase'; 
import { firebaseConfig } from '../../firebase.config';
// import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../context/AuthContext';
export default function App({ Component, pageProps }: any) {
  // firebase.initializeApp(firebaseConfig);
  return (
    <AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>


  )
 
}
