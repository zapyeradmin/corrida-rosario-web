
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-race-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">CF</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Corrida das Famílias</h3>
              </div>
            </div>

            <p className="text-gray-400 mb-6">
              O primeiro evento de corrida das famílias com 5km de circuito, idealizado pelo 
              ECC da Paróquia do Rosário de Serra Talhada em Pernambuco.
            </p>

            <div className="flex gap-4">
              {[
                { icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
                { icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
                { icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                { icon: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" }
              ].map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="bg-white/10 hover:bg-race-primary transition-colors duration-300 rounded-full p-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {['Início', 'Sobre o Evento', 'Percurso', 'Inscrição', 'Contato'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-race-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-race-primary shrink-0" />
                <span className="text-gray-400">
                  Igreja de Nossa Senhora do Rosário, Serra Talhada - PE
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-race-primary shrink-0" />
                <a href="tel:+5587999999999" className="text-gray-400 hover:text-race-primary transition-colors">
                  (87) 99999-9999
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-race-primary shrink-0" />
                <a href="mailto:contato@corridadasfamilias.com.br" className="text-gray-400 hover:text-race-primary transition-colors">
                  contato@corridadasfamilias.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Corrida das Famílias - Correndo Juntos no Rosário. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Desenvolvido com ❤️ pelo ECC da Paróquia do Rosário de Serra Talhada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
