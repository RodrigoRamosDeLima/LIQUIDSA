import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import './Sidebar.css';

function Sidebar({ setActivePage }) {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="https://via.placeholder.com/300" alt="Perfil" className="profile-pic" />
        <h3>RODRIGO</h3>
      </div>
      <nav>
        <ul>
        <ToggleButtonGroup className="sideBarButton" vertical="true" type="radio" name="options" defaultValue={1}>
          <ToggleButton id="tbg-radio-1" value={1} onClick={() => setActivePage('feed')}>Feed</ToggleButton>
          <ToggleButton id="tbg-radio-2" value={1} onClick={() => setActivePage('BarBot')}>Meu Bar</ToggleButton>
          <ToggleButton id="tbg-radio-3" value={1} onClick={() => setActivePage('explore')}>Explorar</ToggleButton>
          <ToggleButton id="tbg-radio-4" value={1} onClick={() => setActivePage('notifications')}>Notificações</ToggleButton>
          <ToggleButton id="tbg-radio-5" value={1} onClick={() => setActivePage('editProfile')}>Alterar Dados</ToggleButton>

          </ToggleButtonGroup>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
