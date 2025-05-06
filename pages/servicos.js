import { Cpu, Settings, Shield, TrendingUp } from 'lucide-react';

export default function Servicos() {
  const services = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: 'Automação de Processos',
      description: 'Soluções completas para automação de processos industriais.',
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: 'Integração de Sistemas',
      description: 'Integração eficiente entre diferentes sistemas e equipamentos.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Segurança Industrial',
      description: 'Implementação de sistemas seguros para operações industriais.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Otimização de Produção',
      description: 'Melhoria contínua dos processos para aumento de produtividade.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
