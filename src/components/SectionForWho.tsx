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
            <span className="flex-shrink-0 mr-3 text-primary">
              ✓
            </span>
            <p className="text-gray-300">Você tem uma ideia de negócio, mas não sabe por onde começar.</p>
          </li>
          <li className="flex justify-center items-start">
            <span className="flex-shrink-0 mr-3 text-primary">
              ✓
            </span>
            <p className="text-gray-300">Precisa de orientações práticas para estruturar e gerenciar seu negócio.</p>
          </li>
          <li className="flex justify-center items-start">
            <span className="flex-shrink-0 mr-3 text-primary">
              ✓
            </span>
            <p className="text-gray-300">Busca inspiração e histórias reais de empreendedores de sucesso.</p>
          </li>
          <li className="flex justify-center items-start">
            <span className="flex-shrink-0 mr-3 text-primary">
              ✓
            </span>
            <p className="text-gray-300">Quer aprender como escalar seu negócio de maneira sustentável.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}