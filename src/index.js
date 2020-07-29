import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './assets/css/style.css';
import Home from  './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
// Desafio master blaster na descrição
// Colocar um jogo ou brincadeira nessa página:
const Pagina404 = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <h1>Ops, quebrou tudo :O</h1>
    <p>
      <Link to="/">Você pode jogar ou voltar pra home :)</Link>
    </p>
    <p>
      Ou <a href="https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej">aprender a fazer o jogo</a>
    </p>
    {/*
      Pessoal, quem quiser fazer o desafio do Flappy Bird, da pra usar esse iframe aqui: 
      - https://codepen.io/omariosouto/pen/pogmdGE
      E quem quiser programar o jogo:
      - https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
    */}
    <iframe
      title="Flappy Bird Game"
      src="https://mariosouto.com/flappy-bird-devsoutinho/"
      width="340"
      height="600" />
  </div>
)

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
