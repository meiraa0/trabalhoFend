import React, { useState } from 'react';

export function NovaDenuncia() {
  const [form, setForm] = useState({ local: '', descricao: '', data: '' });
  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.local || !form.descricao || !form.data) {
      setErro('Todos os campos são obrigatórios.');
      return;
    }
    const denuncias = JSON.parse(localStorage.getItem('denuncias') || '[]');
    denuncias.push(form);
    localStorage.setItem('denuncias', JSON.stringify(denuncias));
    setForm({ local: '', descricao: '', data: '' });
    setErro('');
    alert('Denúncia registrada com sucesso.');
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Nova Denúncia</h2>
      {erro && <p className="text-red-600 mb-2">{erro}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="local" placeholder="Local da ocorrência" value={form.local} onChange={handleChange} className="p-2 border rounded" />
        <textarea name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} className="p-2 border rounded"></textarea>
        <input type="date" name="data" value={form.data} onChange={handleChange} className="p-2 border rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Enviar</button>
      </form>
    </div>
  );
}