import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useAuth } from '../Auth/Auth';

export default function Index() {

  const router = useRouter()
  const { auth } = useAuth()

  useEffect(() => {
    if (auth !== null) {
      router.push('./home')
    }
  }, [])

  if (auth === null) return
}
