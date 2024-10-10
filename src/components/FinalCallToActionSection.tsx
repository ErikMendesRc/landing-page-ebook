import React from 'react';

export default function FinalCallToAction() {
  return (
    <section id="chamada-final" className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
          Garanta seu Futuro como Empreendedor!
        </h2>

        {/* Texto Descritivo */}
        <p className="text-lg md:text-xl mb-8 font-sans text-gray-300">
          Comece agora sua jornada com a confiança de quem sabe o que está fazendo! 
          Com este e-book, você terá todas as ferramentas e conhecimentos necessários para transformar suas ideias em um negócio de sucesso.
        </p>

        {/* Bônus - Acesso ao Grupo de Networking */}
        <p className="text-lg md:text-xl mb-8 font-sans text-gray-300">
          Ao adquirir o e-book, você também ganhará acesso exclusivo ao nosso <span className="font-bold text-white">Grupo de Networking</span>, onde poderá se conectar com outros empreendedores, compartilhar experiências e aprender com uma comunidade ativa.
        </p>

        {/* Botão de CTA */}
        <a
          href="https://pay.kiwify.com.br/X2Xm1vL"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-black uppercase font-bold py-4 px-8 rounded-md shadow-lg hover:bg-opacity-90 transition duration-300"
        >
          Baixar E-book Agora
        </a>
      </div>
    </section>
  );
}