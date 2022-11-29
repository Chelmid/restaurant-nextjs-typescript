import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../Auth/Auth'
import { useRouter } from 'next/router'
import ProtectedRoute from '../Auth/ProtectedRoute'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useState } from 'react'

const noAuthRequired = ['/', '/login', '/sign']

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const [nameValueSearch , setNameValueSearch] = useState<string>();
  const statusValueSearch = ( name : string) => {
    setNameValueSearch(name);
  }

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps}/>
      ) : (
        <ProtectedRoute>
          <Navbar search={statusValueSearch} />
          <Component {...pageProps} passValueSearch={nameValueSearch}/>
          <Footer />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}
