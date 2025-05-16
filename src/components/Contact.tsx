import React from 'react';

const Contact: React.FC = () => {
  // Substitua pelas informações de contato reais
  const email = "contato@radioconquistaweb.com.br";
  const phone = "(XX) XXXXX-XXXX";
  const address = "Endereço da Rádio, Cidade, Estado";

  return (
    <section id="contact" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Entre em Contato</h2>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
          {email !== "" && (
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
            </p>
          )}
          {phone !== "" && (
            <p className="text-gray-700 mb-2">
              <strong>Telefone/WhatsApp:</strong> <a href={`tel:${phone.replace(/\D/g,"")}`} className="text-blue-600 hover:underline">{phone}</a>
            </p>
          )}
          {address !== "" && (
            <p className="text-gray-700 mb-2">
              <strong>Endereço:</strong> {address}
            </p>
          )}
          {/* Você pode adicionar um formulário de contato aqui se desejar */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
