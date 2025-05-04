
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Sponsors = () => {
  return (
    <section id="patrocinadores" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-race-primary">Nossos Patrocinadores</h2>
          <div className="w-20 h-1 bg-race-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça quem apoia a Corrida das Famílias e faz esse evento ser possível.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mb-12 reveal" data-animation="fade-up">
          {/* Sponsor logos */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-center h-32 border border-gray-100 card-hover">
              <img 
                src={`https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&q=80`}
                alt={`Patrocinador ${num}`}
                className="max-h-20 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="text-center reveal" data-animation="fade-up">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Quer ser um patrocinador e fazer parte deste evento?
          </h3>
          <Button 
            asChild
            size="lg"
            className="bg-race-primary text-white hover:bg-race-primary-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 rounded-full"
          >
            <a href="https://wa.me/5587996709355" target="_blank" rel="noopener noreferrer">
              Seja um Patrocinador <ExternalLink size={18} className="ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
