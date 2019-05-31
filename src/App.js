import React from 'react';
import './App.css';
import LoginComponent from './components/login/component'
import CadastroComponent from './components/cadastro/component';

function App() {
  return (
    <div className="App">
      <header> MELHOR QUE O TWITTER </header>
      <div class="main">
          <LoginComponent/>
          <CadastroComponent/>
      </div>
    </div>
  );
}

export default App;
