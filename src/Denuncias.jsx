import React, { useEffect, useState } from 'react';

export function Denuncias() {
  const [denuncias, setDenuncias] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('denuncias');
    if (data) setDenuncias(JSON.parse(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Denúncias Registradas</h2>
      {denuncias.length === 0 ? (
        <p>Nenhuma denúncia registrada.</p>
      ) : (
        <ul className="grid gap-4">
          {denuncias.map((d, i) => (
            <li key={i} className="p-4 bg-white rounded shadow">
              <p><strong>Local:</strong> {d.local}</p>
              <p><strong>Descrição:</strong> {d.descricao}</p>
              <p><strong>Data:</strong> {d.data}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}