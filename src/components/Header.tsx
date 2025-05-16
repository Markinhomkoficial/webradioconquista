import React from 'react';
import logo from '../assets/logo.png'; // Caminho para a sua logo

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="Rádio Conquista Web" className="h-16" />
        <h1 className="text-xl md:text-3xl font-bold">Rádio Conquista Web</h1>
      </div>
    </header>
  );
};

export default Header;
