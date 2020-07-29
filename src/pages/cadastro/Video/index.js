import React from 'react';
import PageDefault from '../../PageDefault';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroVideo() {
  return (
    <PageDefault>
        <h1>Cadastro de video</h1>
        <Link to="/cadastro/categoria">
            cadastrar categoria
        </Link>
    </PageDefault>
  );
}

export default CadastroVideo;