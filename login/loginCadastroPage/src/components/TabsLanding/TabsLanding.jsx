import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TabsLanding.css';

function Navbar({ toggleView }) {
  return (
    <Tabs
      defaultActiveKey="cadastro"
      id="fill-tab-example"
      className="mb-3 myTab"
      fill
      onSelect={(key) => toggleView(key)} // Adiciona o onSelect para capturar a aba selecionada
    >
      <Tab eventKey="cadastro" title="Cadastro" tabClassName='myTab'></Tab>
      <Tab eventKey="login" title="Login" tabClassName='myTab'></Tab>
    </Tabs>
  );
}

export default Navbar;
