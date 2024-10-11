import React from 'react';

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-serif">Guia do Empreendedor</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#o-que-voce-vai-aprender" className="hover:text-primary transition">
                O Que Você Vai Aprender
              </a>
            </li>
            <li>
              <a href="#para-quem" className="hover:text-primary transition">
                Para Quem
              </a>
            </li>
            <li>
              <a href="#depoimentos" className="hover:text-primary transition">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#chamada-final" className="hover:text-primary transition">
                Chamada Final
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="https://pay.kiwify.com.br/X2Xm1vL"
          className="bg-primary text-black py-2 px-4 rounded-md font-bold hover:bg-opacity-90 transition duration-300"
        >
          Comprar E-book
        </a>
      </div>
    </header>
  );
}