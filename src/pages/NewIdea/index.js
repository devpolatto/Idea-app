import React from 'react';

import { Container } from './styles';

function NewIdea() {
  return (
      <Container>
          <form action="">

            <h1>NOVA IDEIA</h1>

            <div className="new-idea">
                <div className="enter-idea">
                    <label for="">Titulo ideia</label>
                    <input type="text" />
                </div>
                <div className="enter-idea">
                    <label for="">Categoria</label>
                    <input type="text" />
                </div>
            </div>

            <div className="link-img">
                <label for="">Link da imagem</label>
                <input type="text" />
            </div>

            <div className="description">
                <label for="">Digite aqui uma descricao para essa ideia</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div className="link-idea">
                <label for="">Link da imagem</label>
                <input type="text" />
            </div>

            <div className="navigation">
                <button className="btn-back">Voltar</button>
                <button className="btn-send">Enviar</button>
            </div>

          </form>
      </Container>
  );
}

export default NewIdea;