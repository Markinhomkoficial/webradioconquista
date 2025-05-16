import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white p-4 text-center mt-8">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Rádio Conquista Web. Todos os direitos reservados.</p>
        <p>A Trilha Sonora da Sua Vida!</p>
      </div>
    </footer>
  );
};

export default Footer;
