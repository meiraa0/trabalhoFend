import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { NovaDenuncia } from './pages/NovaDenuncia';
import { Denuncias } from './pages/Denuncias';

export default function App() {
  return (
    <h1 className="text-3xl font-bold text-green-600 text-center mt-10">
      React + Tailwind está funcionando!
    </h1>
  );
}
