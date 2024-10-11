import React from 'react';
import Image from 'next/image'; // Certifique-se de que 'next/image' está configurado se estiver usando Next.js

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Seção 1: Imagem do mockup */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/mockup.png" // Caminho da sua imagem mockup
            alt="Mockup do E-book"
            width={200}
            height={300}
            className="shadow-lg"
          />
        </div>

        {/* Seção 2: Navegação rápida */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Navegação Rápida</h3>
          <ul className="space-y-2">
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
        </div>

        {/* Seção 3: Informações sobre a criação */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-4">Desenvolvimento</h3>
          <p className="text-gray-400 mb-2">
            Esta página foi desenvolvida por{' '}
            <a
              href="https://www.eebtecnologia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              E&B Tecnologia
            </a>
          </p>
          <p className="text-gray-400">Crie sua landing page com a gente.</p>
        </div>
      </div>

      {/* Rodapé com direitos reservados */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-500">
          © 2024 Guia do Empreendedor. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}