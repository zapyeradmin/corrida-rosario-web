
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="início" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Famílias correndo juntas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-race-primary/50"></div>
      </div>

      <div className="container-custom relative z-10 text-white py-16 md:py-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal" data-animation="fade-left">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Corrida das Famílias
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-race-accent mb-6">
              Correndo Juntos no Rosário
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-lg">
              Participe do primeiro evento de corrida de rua para famílias em Serra Talhada! 
              Uma experiência única de esporte, saúde e união familiar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inscrição" className="btn btn-accent btn-lg rounded-full">
                Inscreva-se Agora
              </a>
              <a href="#sobre" className="btn btn-secondary btn-lg rounded-full flex items-center justify-center gap-2">
                Saiba Mais <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-8 bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="flex flex-wrap gap-4 justify-between">
                <div className="text-center">
                  <p className="text-race-accent font-semibold">Data</p>
                  <p className="font-bold">15 de Junho, 2025</p>
                </div>
                <div className="text-center">
                  <p className="text-race-accent font-semibold">Horário</p>
                  <p className="font-bold">08:00</p>
                </div>
                <div className="text-center">
                  <p className="text-race-accent font-semibold">Local</p>
                  <p className="font-bold">Igreja N.S. do Rosário</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 relative overflow-hidden shadow-xl animate-float">
              <h3 className="text-2xl font-bold mb-4">Largada em:</h3>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {['DIAS', 'HORAS', 'MIN', 'SEG'].map((unit, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-race-primary text-white p-3 rounded-lg font-bold text-xl mb-1">
                      {index === 0 ? '243' : index === 1 ? '16' : index === 2 ? '42' : '09'}
                    </div>
                    <p className="text-sm font-medium">{unit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a href="#inscrição" className="btn btn-accent w-full btn-lg rounded-md">
                  Garantir Minha Vaga
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#sobre" className="text-white bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
