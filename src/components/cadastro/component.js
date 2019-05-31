import React from 'react';
import './style.css';

class CadastroComponent extends React.Component {
    render() {
      return (
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
      );
    }
  }

export default CadastroComponent;