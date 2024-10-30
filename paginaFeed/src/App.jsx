import React, { useState } from 'react';
import Sidebar from './components/SideBar/SideBar';
// import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Notifications from './components/SideBar/Notifications/Notifications';
import Explore from './components/SideBar/Explore/Explore';
import EditProfile from './components/SideBar/EditProfile/EditProfile';
import './App.css';  // Estilos gerais
import BarBot from './components/SideBar/BarBot/BarBot';


function App() {
  const [activePage, setActivePage] = useState('feed');

  const renderPage = () => {
    switch (activePage) {
      case 'Feed':
        return <Feed />;
      case 'Notificações':
        return <Notifications />;
      case 'Explorar':
        return <Explore />;
      case 'Perfil':
        return <EditProfile />;
        case 'Meu Bar':
        return <BarBot />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="app">
      <Sidebar setActivePage={setActivePage} />
      <div className="main-content">
       
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
