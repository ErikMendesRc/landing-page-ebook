import React from 'react';

export default function BonusSection() {
  return (
    <section id="bonus-exclusivo" className="bg-primary text-black py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
          Oferta Especial
        </h2>

        {/* Texto Descritivo */}
        <p className="text-lg md:text-xl mb-6 font-sans">
          Ao adquirir o e-book, você também receberá uma planilha em Excel exclusiva para criar o seu plano de negócios de forma estruturada e eficiente.
        </p>

        {/* Preço e Desconto */}
        <p className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          De <span className="line-through text-red-600">R$99,90</span> por <span className="text-black">R$69,90</span>!
        </p>

        {/* Botão de CTA */}
        <a
          href="https://pay.kiwify.com.br/X2Xm1vL"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-primary uppercase font-bold py-4 px-8 rounded-md shadow-lg hover:bg-opacity-90 transition duration-300"
        >
          Aproveite Agora
        </a>
      </div>
    </section>
  );
}