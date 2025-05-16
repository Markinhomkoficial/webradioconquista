import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import MusicRequest from './components/MusicRequest';
import AppDownload from './components/AppDownload';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Placeholder - o usuário precisará fornecer a URL de streaming real
  const streamUrl = "https://stream.zeno.fm/s5c4z2y2k5zuv"; // Exemplo de URL de stream

  return (
    <div className="App antialiased text-gray-900 bg-gray-50">
      <Header />
      <main>
        <Player streamUrl={streamUrl} />
        <MusicRequest />
        <AppDownload />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
