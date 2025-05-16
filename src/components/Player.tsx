import React from 'react';

interface PlayerProps {
  streamUrl: string;
}

const Player: React.FC<PlayerProps> = ({ streamUrl }) => {
  return (
    <section id="player" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Ouça Ao Vivo</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <audio controls className="w-full">
            <source src={streamUrl} type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          {/* Adicionar informações da música tocando atualmente aqui, se disponível */}
        </div>
      </div>
    </section>
  );
};

export default Player;
