
const Course = () => {
  return (
    <section id="percurso" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-race-primary">Percurso</h2>
          <div className="w-20 h-1 bg-race-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um trajeto de 5km com pontos de hidratação e apoio estratégicos para 
            garantir sua segurança e bem-estar durante toda a corrida.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-3 reveal" data-animation="fade-right">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3818377817413!2d-38.29241768766634!3d-8.662683067342811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70bcb8e6d6a1c7f%3A0x898bfd6acdf050ef!2sIgreja%20N%20Sra%20do%20Ros%C3%A1rio!5e0!3m2!1spt-BR!2sbr!4v1717699641808!5m2!1spt-BR!2sbr"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Mapa do percurso"
              ></iframe>
            </div>
          </div>

          <div className="md:col-span-2 reveal" data-animation="fade-left">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Detalhes do Percurso</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-race-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Distância</h4>
                    <p className="text-gray-600">
                      Percursos de 3km e 5km disponíveis para diferentes níveis de condicionamento físico.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-race-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hidratação</h4>
                    <p className="text-gray-600">
                      5 pontos de hidratação estrategicamente posicionados ao longo do percurso.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-race-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Apoio</h4>
                    <p className="text-gray-600">
                      Equipes de apoio e primeiros socorros distribuídas em todo o trajeto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-race-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Sinalização</h4>
                    <p className="text-gray-600">
                      Percurso completamente sinalizado para orientar os participantes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-race-secondary rounded-lg">
                <p className="text-gray-700 font-medium text-sm">
                  A concentração e largada acontecerão na Matriz da Igreja de Nossa Senhora do Rosário, próximo à Concha Acústica da cidade de Serra Talhada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Hidratação Garantida",
              description: "Água e isotônicos disponíveis em todos os pontos de hidratação",
              icon: "M18 8h-1V6c0-2.21-1.79-4-4-4S9 3.79 9 6v2H8c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-7 0V6c0-1.1.9-2 2-2s2 .9 2 2v2h-4z"
            },
            {
              title: "Equipe Médica",
              description: "Profissionais de saúde disponíveis durante todo o evento",
              icon: "M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 2H3l1 2H2v2h8V4H9z"
            },
            {
              title: "Pontos de Descanso",
              description: "Áreas designadas para recuperação ao longo do trajeto",
              icon: "M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"
            },
            {
              title: "Suporte Técnico",
              description: "Auxílio para qualquer problema durante a corrida",
              icon: "M22 9V7h-2V3H2v18h18v-4h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md card-hover reveal" data-animation="fade-up">
              <div className="bg-race-primary/10 p-4 inline-block rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-race-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a 
            href="#inscrição" 
            className="btn btn-primary btn-lg rounded-full transition-all hover:scale-105"
          >
            Garantir Minha Inscrição
          </a>
        </div>
      </div>
    </section>
  );
};

export default Course;
