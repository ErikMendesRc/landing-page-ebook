import React from 'react';

export default function FAQSection() {
  const faqs = [
    {
      question: "Para quem este e-book é indicado?",
      answer:
        "Este e-book é indicado para novos empreendedores que estão começando sua jornada ou para aqueles que já têm uma ideia de negócio e querem transformá-la em realidade.",
    },
    {
      question: "Posso aplicar as dicas se já tenho um negócio?",
      answer:
        "Sim! As dicas práticas e estratégias abordadas no e-book também são úteis para empreendedores que já têm um negócio e querem aprimorar sua gestão, expandir suas operações ou melhorar suas estratégias de marketing e vendas.",
    },
    {
      question: "Qual o formato do e-book?",
      answer:
        "O e-book está disponível em dois formatos: PDF, que você pode baixar diretamente, e a versão Kindle, disponível na Amazon. Assim, você pode escolher a opção que melhor se adapta às suas preferências de leitura.",
    },
  ];

  return (
    <section id="faq" className="bg-background text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif text-center">
          Perguntas Frequentes
        </h2>

        {/* FAQ Items */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary font-serif">
                {faq.question}
              </h3>
              <p className="text-lg text-gray-300 font-sans leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}