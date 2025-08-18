import React from "react";
import fotoPerfil from './assets/perfil.jpg'

const App = () => {
  const perfil = {
    nome : 'Thayza Silva',
    bio: ' Full Stack | UX/UI '
  };

  const links = [
    { title: 'Meu Portfólio', url: 'https://portifoliots.netlify.app/' },
    { title: 'Instagram', url: 'https://instagram.com/devcomthay' },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/thayza-silva-b01474203/' },
    { title: 'Github', url: 'https://github.com/thayzavi' },
  ];

  return (
    <div className="bg-gray min-h-screen flex flex-col items-center rjustify-center p-4 font-sans">

      <div className="flex flex-col items-center mb-10 text-white">
        <img
          src={fotoPerfil} alt="foto de perfil" className="w-24 h-24 rounded-full border-4 border-gray-700 shadow-log mb-4"/>

      <h1 className="text-3x1 sm:text-4x1 font-bold mb-5 text-center">{perfil.nome}</h1>

      <p className="text-sm sm:text-base text-gray-400 text-center max-w-sm px-4">{perfil.bio}</p>
    </div>

    <div className="w-full max-w-md space-y-4">
      {links.map((link, index) => (
        <a
        key={index}
        href={link.url}
        target="_black"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full  text-white py-4 px-6 rounded-xl shadow-lg
        border border-white transition-trasform transfrom hover:scale-105 hover:bg-gray-300
        focus:outline-none focus:ring-2 focus:ring-gray-400  ocus:ring-white focus:ring-opacity-100">

          <span className="text-lg font-medium">{link.title}</span>
        </a>
      ))}
    </div>
      <footer className="mt-10 text-gray-500 text-sm">
        <p>&copy; 2025 Thayza Silva. Todos os direitos reservados.</p>
      </footer>
  </div>
  );
};

export default App;