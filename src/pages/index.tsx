import MainComponent from '@/components/shared/MainComponent'
import React from 'react'
import { useRouter } from 'next/router'

const Home: React.FC = () => {
  const router = useRouter()

  return (
    <MainComponent>
      <button onClick={() => router.push('/auth/login')}>Loginbutton</button>
    </MainComponent>
  )
}

export default Home
