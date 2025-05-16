import React from 'react';

const AppDownload: React.FC = () => {
  // Substitua pelos links reais do seu aplicativo
  const playStoreLink = "#"; 
  const appStoreLink = "#";

  return (
    <section id="app-download" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Baixe Nosso App</h2>
        <p className="text-gray-700 mb-6 max-w-md mx-auto">
          Leve a Rádio Conquista Web com você para onde for! Ouça nossa programação completa, participe de promoções e muito mais.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {playStoreLink !== "#" && (
            <a 
              href={playStoreLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              {/* Ícone do Google Play (exemplo) */}
              <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.526 12.003c0-.19-.019-.385-.038-.573H12.001v3.288h5.294c-.237 1.062-.885 1.96-1.803 2.592v2.13h2.741c1.602-1.474 2.527-3.647 2.527-6.159l-.001-.278z"/><path d="M12.001 21.999c2.494 0 4.585-0.825 6.116-2.235l-2.741-2.13c-.825.554-1.88.885-3.029.885-2.32 0-4.287-1.564-4.991-3.663H4.171v2.203c1.429 2.825 4.413 4.755 7.83 4.755z"/><path d="M7.01 14.332c-.171-.516-.26-1.062-.26-1.62s.089-1.104.26-1.62V8.888H4.171c-.573 1.16-.885 2.453-.885 3.824s.312 2.664.885 3.824l2.839-2.204z"/><path d="M12.001 4.5c1.347 0 2.569.466 3.522 1.38l2.431-2.431C16.585 1.803 14.494 1 12.001 1 8.582 1 5.598 2.93 4.171 5.755l2.839 2.204c.704-2.099 2.671-3.663 4.991-3.663z"/></svg>
              Google Play
            </a>
          )}
          {appStoreLink !== "#" && (
            <a 
              href={appStoreLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              {/* Ícone da Apple App Store (exemplo) */}
              <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.385 17.626c-.04.001-.08.001-.12.001-.74 0-1.53-.203-2.33-.609-.76-.385-1.42-.79-2.22-1.11-.7-.28-1.41-.42-2.12-.42s-1.42.14-2.12.42c-.8.32-1.46.725-2.22 1.11-.8.406-1.59.609-2.33.609-.04 0-.08 0-.12-.001C3.125 17.506 2 15.276 2 12.756c0-2.13.94-3.99 2.41-5.11.7-.54 1.51-.81 2.32-.81.73 0 1.45.23 2.08.68.62.45 1.13.99 1.63 1.62.46-.65.99-1.19 1.63-1.63.63-.45 1.35-.68 2.08-.68.81 0 1.62.27 2.32.81 1.47 1.12 2.41 2.98 2.41 5.11 0 2.52-1.125 4.75-2.935 4.87zm-5.09-11.05c.69-.85 1.14-1.91.99-3.07-.01-.1-.01-.2-.01-.29h.02c.88.05 1.68.46 2.25.91.59.47.94 1.15.94 1.85 0 .94-.52 1.75-1.3 2.15-.61.31-1.29.31-1.9-.05zm-3.59.64c-.61-.4-1.29-.4-1.9.05-.78.4-1.3 1.21-1.3 2.15 0 .7.35 1.38.94 1.85.57.45 1.37.86 2.25.91h.02c0-.1-.01-.19-.01-.29.14-1.16-.31-2.22-.99-3.07z"/></svg>
              App Store
            </a>
          )}
        </div>
        {(playStoreLink === "#" && appStoreLink === "#") && (
            <p className="text-gray-500 mt-4">Links para download do aplicativo em breve!</p>
        )}
      </div>
    </section>
  );
};

export default AppDownload;
