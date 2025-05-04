
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface RegistrationData {
  id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  course: string;
  payment: string;
  tshirtSize: string;
  terms: boolean;
}

const Payment = () => {
  const navigate = useNavigate();
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);

  useEffect(() => {
    // Retrieve registration data from localStorage
    const savedData = localStorage.getItem('registrationData');
    if (savedData) {
      setRegistrationData(JSON.parse(savedData));
    } else {
      // If no registration data found, redirect to registration form
      navigate('/#inscrição');
    }
  }, [navigate]);

  if (!registrationData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando informações de pagamento...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-race-primary mb-6">Pagamento</h1>
          
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Resumo da inscrição</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Número de inscrição:</span> {registrationData.id}</p>
              <p><span className="font-medium">Nome:</span> {registrationData.name}</p>
              <p><span className="font-medium">Percurso:</span> {registrationData.course}</p>
              <p><span className="font-medium">Tamanho da camisa:</span> {registrationData.tshirtSize}</p>
              <p><span className="font-medium">Forma de pagamento:</span> {registrationData.payment}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Esta página será substituída pela plataforma de pagamento real em breve.
            </p>
            <p className="font-medium text-lg mb-6">
              Valor total: R$47,00
            </p>
            <button 
              type="button" 
              className="btn btn-primary btn-lg rounded-lg px-12"
              onClick={() => {
                alert('Sistema de pagamento em implementação');
                navigate('/');
              }}
            >
              Prosseguir para o pagamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
