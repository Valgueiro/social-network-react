import React from 'react';
import './style.css';

class LoginComponent extends React.Component {
    render() {
      return (
        <div class="box">
              <div class="box-name"> LOGIN </div>
              <form class="formulario">
                  <input class="form-item form-input" type="email" placeholder="Email"/><br/>
                  <input class="form-item form-input" type="password" placeholder="Senha"/><br/>
                  <input class="form-item form-button" type="submit" value="Entrar"/>
              </form>
              <a class="esqueci-senha" href="#"> ESQUECI A SENHA</a>
          </div>
      );
    }
  }

export default LoginComponent