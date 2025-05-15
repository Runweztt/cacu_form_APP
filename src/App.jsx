import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Cacu from './Components/Cacu';
import Form from './Components/Form';
import Data from './Components/Data';

function App() {
  return (
    <div>
      {/* Optional Navigation Links */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/cacu">Cacu</Link> | <Link to="/form">Form</Link> | <Link to="/Data">Data</Link>
      </nav>

      <Routes>
        <Route path="/cacu" element={<Cacu />} />
        <Route path="/form" element={<Form />} />
          <Route path="/Data" element={<Data />} />
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
