/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PageDefault from '../../PageDefault';
import FormField from '../../../components/FormField';
import FormTextArea from '../../../components/FormTextArea';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        <span style={{ color: values.cor }}>{values.nome}</span>
      </h1>
      <form onSubmit={(infosDoEvento) => {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
      }}
      >
        <FormField
          type="text"
          label="Nome da categoria:"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormTextArea
          label="Descrição:"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          type="color"
          label="Nome da categoria:"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
