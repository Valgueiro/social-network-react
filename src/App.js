import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header> MELHOR QUE O TWITTER </header>
      <div class="main">
          <div class="box">
              <div class="box-name"> LOGIN </div>
              <form class="formulario">
                  <input class="form-item form-input" type="email" placeholder="Email"/><br/>
                  <input class="form-item form-input" type="password" placeholder="Senha"/><br/>
                  <input class="form-item form-button" type="submit" value="Entrar"/>
              </form>
              <a class="esqueci-senha" href="#"> ESQUECI A SENHA</a>
          </div>
          <div class="box">
              <div class="box-name"> CADASTRO </div>
              <form class="formulario">
                  <input class="form-item form-input" type="text" placeholder="Nome"/><br/>
                  <input class="form-item form-input" type="email" placeholder="Email"/><br/>
                  <input class="form-item form-input" type="password" placeholder="Senha"/><br/>
                  <input class="form-item form-input" type="password" placeholder="Repetir Senha"/><br/>
                  <input class="form-item form-button" type="submit" value="Cadastrar"/>
              </form>
          </div>
      </div>
    </div>
  );
}

export default App;
