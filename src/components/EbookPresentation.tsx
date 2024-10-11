import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const EbookPresentation: React.FC = () => {
  const benefits = [
    "Acompanhamento de cada etapa da criação de um negócio.",
    "Estudos de caso com lições valiosas.",
    "Dicas práticas e acionáveis para aplicar no dia a dia.",
    "Quadros informativos com dados e estatísticas para decisões informadas.",
  ];

  return (
    <section className="bg-background text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 font-serif text-foreground">
          Por que Este E-book é Essencial para o Seu Sucesso?
        </h2>

        {/* Texto Descritivo */}
        <p className="text-lg md:text-xl text-center mb-12 leading-relaxed text-gray-300 font-sans">
          O <strong className="text-white">&apos;Iniciando Seu Primeiro Negócio&apos;</strong> é o guia definitivo para transformar suas ideias em um negócio de sucesso.
          Com ferramentas práticas, estudos de caso reais e dicas essenciais, você estará preparado para cada passo da jornada.
        </p>

        {/* Lista de Benefícios */}
        <ul className="space-y-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircleIcon className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
              <span className="text-base md:text-lg font-sans text-gray-200">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EbookPresentation;