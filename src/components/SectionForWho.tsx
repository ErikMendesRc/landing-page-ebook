import React from 'react';

export default function SectionForWho() {
  return (
    <section id="para-quem" className="bg-background text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
          Este Guia é Perfeito para Você Se...
        </h2>

        {/* Lista de Benefícios */}
        <ul className="space-y-6 text-lg font-sans">
          <li className="flex justify-center items-start">
            <svg
              className="w-6 h-6 flex-shrink-0 mr-3 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-300">Você tem uma ideia de negócio, mas não sabe por onde começar.</p>
          </li>
          <li className="flex justify-center items-start">
            <svg
              className="w-6 h-6 flex-shrink-0 mr-3 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-300">Precisa de orientações práticas para estruturar e gerenciar seu negócio.</p>
          </li>
          <li className="flex justify-center items-start">
            <svg
              className="w-6 h-6 flex-shrink-0 mr-3 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-300">Busca inspiração e histórias reais de empreendedores de sucesso.</p>
          </li>
          <li className="flex justify-center items-start">
            <svg
              className="w-6 h-6 flex-shrink-0 mr-3 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-300">Quer aprender como escalar seu negócio de maneira sustentável.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}