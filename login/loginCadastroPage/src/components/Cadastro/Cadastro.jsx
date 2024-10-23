import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Cadastro.css';
import '../LoginCadastro.css';


function Cadastro() {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    confirmaEmail: '',
    senha: '',
    confirmaSenha: '',
  });
  const [check, setCheck] = useState(false);


  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div className="cadastro-form">
      <h2>CADASTRO</h2>
      <Form onSubmit={(event) => event.preventDefault()}>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Nome"
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
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Sobrenome"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                id="sobrenome"
                value={form.sobrenome}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Endereço de Email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder=""
                id="email"
                value={form.email}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="@Tagname"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                id="confirmaEmail"
                value={form.confirmaEmail}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>

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

          <Form.Group as={Col} controlId="formGridPassword">
            <FloatingLabel controlId="floatingPassword" label="Confirmar Senha">
              <Form.Control
                type="password"
                placeholder=""
                id="confirmaSenha"
                value={form.confirmaSenha}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 formGroup" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            value="maior"
            checked={check}
            onChange={() => setCheck(!check)}
            label="Declaro que sou maior de 18 anos."
          />
        </Form.Group>

        <Button className="form-button" variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}

export default Cadastro;
