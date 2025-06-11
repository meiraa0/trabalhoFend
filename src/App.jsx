import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { NovaDenuncia } from './pages/NovaDenuncia';
import { Denuncias } from './pages/Denuncias';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50 text-gray-800">
        <header className="bg-green-600 text-white p-4 shadow-md">
          <h1 className="text-xl font-bold">Sistema de Denúncias Ambientais</h1>
          <nav className="mt-2 flex gap-4">
            <Link to="/">Início</Link>
            <Link to="/nova">Nova Denúncia</Link>
            <Link to="/denuncias">Ver Denúncias</Link>
          </nav>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nova" element={<NovaDenuncia />} />
            <Route path="/denuncias" element={<Denuncias />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}