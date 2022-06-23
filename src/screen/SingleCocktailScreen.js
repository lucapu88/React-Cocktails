import React from 'react';
import styled from 'styled-components';

//INIZIALMENTE PROGETTATA COME UNA PAGINA A PARTE CON UNA ROTTA SUA, MA ATTUALMENTE PREFERISCO USARLO COME COMPONENTE CLASSICO
const SingleCocktailScreen = ({
  drinkName,
  type,
  category,
  strGlass,
  strInstructionsList,
  strInstructionsIT,
  strInstructions,
}) => {
  return (
    <Wrapper>
      <h5 className="drink-name">{drinkName}</h5>
      <div className="spacer">
        <div className="cocktail-type">
          <p className="label">{type}</p>
          <p className="label">{category}</p>
          <p className="label">{strGlass}</p>
        </div>
        <div className="spacer">
          <h4>Ingredienti :</h4>
          <ul className="instruction-list">
            {strInstructionsList.map((el, index) => {
              if (el.istruzione) {
                return (
                  <li key={index}>
                    <p className="info">
                      {el.qty} {el.istruzione}
                    </p>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <hr />

        <div className="spacer">
          <h4>Istruzioni :</h4>
          <p className="info">
            {strInstructionsIT ? strInstructionsIT : strInstructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 5.25rem;
  flex-direction: column;
  height: 350px;
  .drink-name {
    text-align: center;
    text-transform: uppercase;
  }
`;

export default SingleCocktailScreen;
