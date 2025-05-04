
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-race-primary">Sobre o Evento</h2>
          <div className="w-20 h-1 bg-race-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            O primeiro grande evento de corrida de rua para famílias em Serra Talhada, 
            idealizado pelo ECC da Paróquia do Rosário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal" data-animation="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Corrida das Famílias" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="reveal" data-animation="fade-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Corrida das Famílias, Correndo Juntos no Rosário
            </h3>
            <p className="text-gray-600 mb-6">
              Este evento marca o início de uma nova tradição em Serra Talhada, 
              reunindo famílias em uma celebração de saúde, esporte e união. 
              Com um percurso de 5km, a corrida acontecerá no dia 15 de Junho de 2025, 
              a partir das 8:00 da manhã.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
                <div className="bg-race-primary/10 p-3 rounded-lg">
                  <Calendar className="text-race-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Data</h4>
                  <p className="text-gray-600">15 de Junho, 2025</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
                <div className="bg-race-primary/10 p-3 rounded-lg">
                  <Clock className="text-race-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Horário</h4>
                  <p className="text-gray-600">Concentração às 7:00 - Largada às 8:00</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
                <div className="bg-race-primary/10 p-3 rounded-lg">
                  <MapPin className="text-race-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Local</h4>
                  <p className="text-gray-600">Matriz da Igreja de Nossa Senhora do Rosário</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
                <div className="bg-race-primary/10 p-3 rounded-lg">
                  <Users className="text-race-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Idealização</h4>
                  <p className="text-gray-600">ECC da Paróquia do Rosário</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-race-secondary rounded-lg border border-race-primary/20">
              <p className="text-gray-700 font-medium">
                A participação custa apenas <span className="font-bold text-race-primary">R$47,00</span> + 1 Kg de alimento não perecível para doação.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 card-hover reveal text-center" data-animation="fade-up">
            <div className="bg-race-primary/10 p-4 inline-block rounded-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-race-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Valor Acessível</h3>
            <p className="text-gray-600">
              Apenas R$47,00 + 1 Kg de alimento não perecível para doação,
              que será destinado às famílias carentes.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 card-hover reveal text-center" data-animation="fade-up">
            <div className="bg-race-primary/10 p-4 inline-block rounded-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-race-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Kit Completo</h3>
            <p className="text-gray-600">
              Kit do atleta inclui camiseta oficial, número do peito, 
              medalha de participação e hidratação durante o percurso.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 card-hover reveal text-center" data-animation="fade-up">
            <div className="bg-race-primary/10 p-4 inline-block rounded-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-race-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Segurança</h3>
            <p className="text-gray-600">
              Percurso com 5 pontos de hidratação e apoio aos atletas,
              garantindo uma corrida segura para todos os participantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
