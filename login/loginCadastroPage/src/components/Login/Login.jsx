import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Login.css'


function Login() {

  const [form, setForm] = useState({
    confirmaEmail: '',
    senha: ''
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }


  return (
    <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <div className='loginInputs'>
            
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="@Tagname"
              className="mb-3"
              >
              <Form.Control
                type="text"
                placeholder=""
                id="nome"
                value={form.nome}
                onChange={handleChange}
                />
            </FloatingLabel>
          </Form.Group> </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <FloatingLabel controlId="floatingPassword" label="Senha">
              <Form.Control
                type="password"
                placeholder=""
                id="senha"
                value={form.senha}
                onChange={handleChange}
                />
            </FloatingLabel>
          </Form.Group>
        </Row>
                </div>
        <Button className="form-button" variant="primary" type="submit">
          Login
        </Button>
        </form>
    </div>
  )
}

export default Login