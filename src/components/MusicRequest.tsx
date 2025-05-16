import React, { useState } from 'react';

const MusicRequest: React.FC = () => {
  const [name, setName] = useState('');
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o pedido de música
    // Por exemplo, uma chamada para uma API ou envio de e-mail
    console.log({ name, song, artist, message });
    alert('Seu pedido de música foi enviado com sucesso!');
    setName('');
    setSong('');
    setArtist('');
    setMessage('');
  };

  return (
    <section id="music-request" className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Peça Sua Música</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Seu Nome:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="song" className="block text-gray-700 font-semibold mb-2">Nome da Música:</label>
            <input type="text" id="song" value={song} onChange={(e) => setSong(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="artist" className="block text-gray-700 font-semibold mb-2">Artista/Banda:</label>
            <input type="text" id="artist" value={artist} onChange={(e) => setArtist(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Sua Mensagem (opcional):</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Enviar Pedido
          </button>
        </form>
      </div>
    </section>
  );
};

export default MusicRequest;
