import React from 'react';
import Marquee from 'react-fast-marquee';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "João Oliveira",
      feedback: "Este e-book me deu a confiança necessária para tirar meu sonho do papel!",
    },
    {
      name: "Maria Souza",
      feedback: "As dicas práticas e estudos de caso são incrivelmente úteis. Um guia essencial!",
    },
    {
      name: "Carlos Mendes",
      feedback: "Não sabia por onde começar. Agora, tenho um plano claro para abrir meu negócio.",
    },
    {
      name: "Fernanda Silva",
      feedback: "O conteúdo é claro e direto ao ponto. Estou mais preparado do que nunca!",
    },
    {
      name: "Rafael Lima",
      feedback: "A estrutura do e-book me ajudou a organizar minhas ideias e começar a agir!",
    },
  ];

  return (
    <section id="depoimentos" className="bg-background text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-foreground">
          O que Outros Empreendedores Dizem
        </h2>

        {/* Marquee de Depoimentos */}
        <Marquee gradient={false} speed={50} aria-label="Depoimentos de empreendedores">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mx-8 p-4 bg-gray-800 rounded-lg shadow-lg max-w-md"
            >
              <blockquote className="text-lg italic text-gray-300 mb-4">"{testimonial.feedback}"</blockquote>
              <p className="font-bold text-primary">{testimonial.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}