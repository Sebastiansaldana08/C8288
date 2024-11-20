import React from 'react';
import UploadFile from './components/UploadFile';
import DownloadFile from './components/DownloadFile';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación de Compartición de Archivos Segura</h1>
        <UploadFile />
        <DownloadFile />
      </header>
    </div>
  );
}

export default App;
