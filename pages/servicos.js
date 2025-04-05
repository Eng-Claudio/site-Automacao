//Pagina de serviços
import { Wrench, Cpu, Cable } from 'lucide-react'

export default function Servicos() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-3xl">
        Atuamos com soluções completas de automação industrial, sempre com foco em inovação, segurança e performance. Confira abaixo os serviços oferecidos pela Mind4Ind.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Projetos de Automação"
          icon={<Wrench className="w-10 h-10 text-blue-600" />}
          description="Desenvolvimento de projetos completos para automação de máquinas, linhas e processos industriais."
        />
        <Card
          title="Integração de Sistemas"
          icon={<Cpu className="w-10 h-10 text-blue-600" />}
          description="Integração entre CLPs, IHMs, supervisórios, sensores e atuadores com protocolos industriais."
        />
        <Card
          title="Montagem de Painéis"
          icon={<Cable className="w-10 h-10 text-blue-600" />}
          description="Projeto e montagem de painéis de comando e distribuição com certificação e documentação técnica."
        />
      </div>

      <div className="mt-12 text-center">
        <a href="/contato" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Solicitar uma proposta
        </a>
      </div>
    </section>
  )
}

function Card({ title, icon, description }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
