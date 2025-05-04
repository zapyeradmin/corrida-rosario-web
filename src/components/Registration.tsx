
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Registration = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    course: '',
    payment: '',
    terms: false
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    gender: false,
    course: false,
    payment: false,
    terms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when field is changed
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    const errors = {
      name: !form.name,
      email: !form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
      phone: !form.phone,
      gender: !form.gender,
      course: !form.course,
      payment: !form.payment,
      terms: !form.terms
    };

    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission success
      toast({
        title: "Inscrição enviada com sucesso!",
        description: "Em breve você receberá um e-mail com as instruções para pagamento.",
      });
      
      // Reset form
      setForm({
        name: '',
        email: '',
        phone: '',
        gender: '',
        course: '',
        payment: '',
        terms: false
      });
    } else {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="inscrição" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-race-primary">Inscreva-se Agora</h2>
          <div className="w-20 h-1 bg-race-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Garanta sua vaga na Corrida das Famílias e prepare-se para uma 
            experiência incrível de saúde, espiritualidade e união familiar.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 lg:col-span-4 reveal" data-animation="fade-right">
            <div className="bg-race-primary rounded-xl p-6 text-white sticky top-20">
              <h3 className="text-xl font-bold mb-4">Kit do Atleta</h3>

              <ul className="space-y-3 mb-6">
                {[
                  "Camiseta oficial do evento",
                  "Número de peito personalizado",
                  "Medalha de participação",
                  "Hidratação durante o percurso",
                  "Sorteio de suplementos",
                  "Atividades para toda família"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-race-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center p-4 bg-white/10 backdrop-blur rounded-lg mb-6">
                <p className="text-sm mb-2">Valor da inscrição</p>
                <p className="text-3xl font-bold">R$47,00</p>
                <p className="text-sm mt-2">+ 1 Kg de alimento não perecível</p>
              </div>

              <div className="text-center p-4 bg-white/10 backdrop-blur rounded-lg">
                <h4 className="font-semibold mb-4">Entrega dos kits</h4>
                <p className="text-sm">
                  Os kits serão entregues na Igreja Matriz de Nossa Senhora do Rosário 
                  nos dias 13 e 14 de Junho, das 9h às 18h.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100 reveal" data-animation="fade-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Formulário de Inscrição</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Nome completo *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-race-primary ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`} 
                      placeholder="Digite seu nome completo"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">Nome é obrigatório</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block mb-1 font-medium text-gray-700">E-mail *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-race-primary ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`} 
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && <p className="text-red-500 text-sm mt-1">E-mail válido é obrigatório</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">Telefone/WhatsApp *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-race-primary ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`} 
                        placeholder="(00) 00000-0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                      {formErrors.phone && <p className="text-red-500 text-sm mt-1">Telefone é obrigatório</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="gender" className="block mb-1 font-medium text-gray-700">Sexo *</label>
                      <select 
                        id="gender" 
                        name="gender" 
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-race-primary ${formErrors.gender ? 'border-red-500' : 'border-gray-300'}`}
                        value={form.gender}
                        onChange={handleChange}
                      >
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                      </select>
                      {formErrors.gender && <p className="text-red-500 text-sm mt-1">Selecione uma opção</p>}
                    </div>

                    <div>
                      <label htmlFor="course" className="block mb-1 font-medium text-gray-700">Percurso *</label>
                      <select 
                        id="course" 
                        name="course" 
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-race-primary ${formErrors.course ? 'border-red-500' : 'border-gray-300'}`}
                        value={form.course}
                        onChange={handleChange}
                      >
                        <option value="">Selecione</option>
                        <option value="3km">3 Km</option>
                        <option value="5km">5 Km</option>
                      </select>
                      {formErrors.course && <p className="text-red-500 text-sm mt-1">Selecione uma opção</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="payment" className="block mb-1 font-medium text-gray-700">Forma de pagamento *</label>
                    <select 
                      id="payment" 
                      name="payment" 
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-race-primary ${formErrors.payment ? 'border-red-500' : 'border-gray-300'}`}
                      value={form.payment}
                      onChange={handleChange}
                    >
                      <option value="">Selecione</option>
                      <option value="pix">PIX</option>
                      <option value="transfer">Transferência Bancária</option>
                      <option value="debit">Cartão de Débito</option>
                      <option value="credit">Cartão de Crédito à Vista</option>
                      <option value="credit_installment">Cartão de Crédito Parcelado</option>
                    </select>
                    {formErrors.payment && <p className="text-red-500 text-sm mt-1">Selecione uma opção</p>}
                  </div>

                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      name="terms" 
                      className={`h-5 w-5 rounded border ${formErrors.terms ? 'border-red-500' : 'border-gray-300'} text-race-primary focus:ring-race-primary mt-1`}
                      checked={form.terms}
                      onChange={handleChange}
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      Li e concordo com os termos e condições e política de privacidade do evento *
                    </label>
                  </div>
                  {formErrors.terms && <p className="text-red-500 text-sm">Você precisa aceitar os termos para continuar</p>}
                </div>

                <div className="flex justify-center">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg rounded-lg w-full md:w-auto md:px-12 transition-all hover:scale-105"
                  >
                    Finalizar Inscrição
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
