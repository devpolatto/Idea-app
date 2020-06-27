import React from 'react';

import { Container } from './styles';

// import { ArrowBack } from '@material-ui/icons';

import { FaArrowLeft } from 'react-icons/fa';

function NewIdea() {
  return (
      <Container>
          <form action="">

            <h1 style={{marginBottom: '18px'}}>NOVA IDEIA</h1>

            <div className="new-idea">
                <div className="enter-idea">
                    <label for="" className="title">Titulo ideia</label>
                    <input type="text" />
                </div>
                <div className="enter-idea">
                    <label for="" className="title">Categoria</label>
                    <input type="text" />
                </div>
            </div>

            <div className="link-img">
                <label for="" className="title">Link da imagem</label>
                <input type="text" />
            </div>

            <div className="description">
                <label for="" className="title">Digite aqui uma descricao para essa ideia</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div className="link-idea">
                <label for="" className="title">Link da imagem</label>
                <input type="text" />
            </div>

            <div className="navigation">
                <button className="btn-back"><FaArrowLeft value={{ className: 'react-icons' }} />Voltar</button>
                <button className="btn-send">Enviar</button>
            </div>

          </form>
      </Container>
  );
}

export default NewIdea;