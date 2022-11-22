import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../Auth/Auth'
import { useRouter } from 'next/router'
import ProtectedRoute from '../Auth/ProtectedRoute'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const noAuthRequired = ['/', '/login', '/sign']

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}
