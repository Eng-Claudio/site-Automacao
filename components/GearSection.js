// components/GearSection.js
import { useState } from 'react';
import Image from 'next/image';

export default function GearSection() {
  const [rotation, setRotation] = useState(0);

  const rotateGear = (angle) => {
    setRotation(angle);
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 gap-8 bg-gray-100">
      {/* Botões laterais */}
      <div className="flex flex-col gap-4">
        <button
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => rotateGear(0)}
        >
          Projetos
        </button>
        <button
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => rotateGear(120)}
        >
          Serviços
        </button>
        <button
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => rotateGear(240)}
        >
          Inovação
        </button>
      </div>

      {/* Engrenagem */}
      <div className="w-60 h-40 relative transition-transform duration-600 ease-in-out"
           style={{ transform: `rotate(${rotation}deg)` }}>
        <Image
          src="/gear.png" // coloque aqui a engrenagem no public/ com esse nome
          alt="Engrenagem girando"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </section>
  );
}
