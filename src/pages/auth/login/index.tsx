import React from 'react'
import LoginForm from '../../../components/LoginForm'
import MainComponent from '@/components/shared/MainComponent'
import SignUpForm from '@/components/SignUpForm'

const Login: React.FC = () => {
  return (
    <MainComponent>
      <br />
      <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="Acessar" />
      <br />
      <SignUpForm titlePhrase="Criar nova conta" buttonPhrase="Criar" />
      <br />
    </MainComponent>
  )
}

export default Login
