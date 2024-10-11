import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/business.jpg')] h-screen">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background bg-opacity-90"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 h-full">
        {/* Texto */}
        <div className="w-full md:w-1/2 text-left text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-serif">
            Dê o Primeiro Passo para o Sucesso com Seu Negócio!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 font-sans">
            Descubra o guia completo para tirar suas ideias do papel e construir um negócio de sucesso!
          </p>
          <a
            href="https://pay.kiwify.com.br/X2Xm1vL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white uppercase font-bold py-4 px-8 rounded-md shadow-lg hover:bg-opacity-80 transition duration-300"
          >
            Leia Agora!
          </a>
        </div>

        {/* Imagem do e-book */}
        <div className="w-full md:w-1/2 flex justify-center px-4">
          <Image
            src="/images/mockup.png"
            alt="E-book Mockup"
            width={500}
            height={600}
            className="max-w-sm md:max-w-2xl h-auto shadow-2xl transform scale-150"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;