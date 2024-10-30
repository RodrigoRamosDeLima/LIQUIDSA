import React, { useState, useRef, useEffect } from 'react';
import Search from './Search/Search';
import NewPost from './NewPost/NewPost'; // Importa o componente de criação de posts
import './Sidebar.css';

function Sidebar({ setActivePage }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('Feed');
  const searchRef = useRef(null);
  const modalRef = useRef(null);

  const handleButtonClick = (page) => {
    setActiveButton(page);
    setActivePage(page);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setActivePage('search');
  };

  const handleNewPostClick = () => {
    setIsNewPostOpen(true);
    setActivePage('NewPost');
  };

  // Fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsNewPostOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef, modalRef]);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src='./png/liquidTransp.png' alt="logo" className="profile-pic" />
      </div>
      <nav>
        <div className="menu">
          {['Feed', 'Meu Bar', 'Explorar', 'Notificações', 'Perfil'].map((item) => (
            <div
              key={item}
              className={`menu-item ${activeButton === item ? 'active' : ''}`}
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </div>
          ))}
          <div
            className={`menu-item ${activeButton === 'Pesquisa' ? 'active' : ''}`}
            onClick={handleSearchClick}
          >
            Pesquisa
          </div>
          <div
            className={`menu-item ${activeButton === 'Nova Postagem' ? 'active' : ''}`}
            onClick={handleNewPostClick}
          >
            Nova Postagem
          </div>
        </div>
      </nav>

      {isSearchOpen && <div ref={searchRef}><Search /></div>}

      {isNewPostOpen && (
        <div className="modal-background">
          <div className="modal-content" ref={modalRef}>
            {/* <button className="close-button" onClick={() => setIsNewPostOpen(false)}>X</button> */}
            <NewPost />
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
