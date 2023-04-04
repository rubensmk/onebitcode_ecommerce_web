import React from 'react'
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Form,
} from 'react-bootstrap'
import BlueBackground from '../shared/BlueBackground'

interface LoginProps {
  titlePhrase: string
  buttonPhrase: string
}

const LoginForm: React.FC<LoginProps> = ({ titlePhrase, buttonPhrase }) => {
  return (
    <Row>
      <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
        <BlueBackground>
          <h4>{titlePhrase}</h4>
          <InputGroup className="mt-3">
            <FormControl placeholder="Meu e-mail" />
          </InputGroup>
          <InputGroup className="mt-3">
            <FormControl placeholder="Senha" />
          </InputGroup>
          <Button type="submit" className="btn btn-info mt-3 w-100">
            {buttonPhrase}
          </Button>
          <br />
          <br />
          Esqueci minha senha
        </BlueBackground>
      </Col>
    </Row>
  )
}

export default LoginForm
