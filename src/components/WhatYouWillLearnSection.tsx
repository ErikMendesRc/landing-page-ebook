import React from 'react';

export default function WhatYouWillLearn() {
  const topics = [
    {
      title: "Conceituação da ideia e validação de mercado",
      description:
        "Aprenda como transformar uma ideia em um negócio concreto, validando sua proposta com o mercado e garantindo que sua visão esteja alinhada com a demanda real.",
    },
    {
      title: "Estruturação do negócio: aspectos legais e financeiros",
      description:
        "Entenda os aspectos legais e financeiros essenciais para formalizar seu negócio e manter suas finanças organizadas desde o início.",
    },
    {
      title: "Estratégias de marketing e vendas",
      description:
        "Descubra como promover seu negócio, construir uma marca forte e aplicar estratégias eficazes de marketing e vendas para atrair clientes.",
    },
    {
      title: "Gestão eficiente e crescimento sustentável",
      description:
        "Desenvolva habilidades de gestão para liderar sua equipe, otimizar processos e garantir o crescimento do seu negócio de forma sustentável.",
    },
    {
      title: "Estudos de caso e insights valiosos",
      description:
        "Veja exemplos reais de empreendedores que seguiram as mesmas etapas e aprenderam lições valiosas no caminho para o sucesso.",
    },
  ];

  return (
    <section id="o-que-voce-vai-aprender" className="bg-background text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif">
          O Que Você Vai Aprender
        </h2>

        {/* Tópicos Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <h3 
                className="text-2xl font-bold text-primary mb-4 font-serif"
              >
                {topic.title}
              </h3>
              <p className="text-lg text-gray-300 font-sans leading-relaxed">
                {topic.description.replace(/"/g, '&quot;')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}