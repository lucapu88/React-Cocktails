import React, { useState } from 'react';
import styled from 'styled-components';

import SingleCocktailScreen from '../screen/SingleCocktailScreen';

const Cocktail = ({
  strDrinkThumb: img,
  strDrink: drinkName,
  strAlcoholic: type,
  strCategory: category,
  strGlass,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strInstructions,
  strInstructionsIT,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
}) => {
  const [show, setShow] = useState(false);

  const showInfo = () => {
    setShow(true);
  };
  const hideInfo = () => {
    setShow(false);
  };
  const toggleInfo = () => {
    //serve per il mobile
    setShow(!show);
  };

  const strInstructionsList = [
    { istruzione: strIngredient1, qty: strMeasure1 },
    { istruzione: strIngredient2, qty: strMeasure2 },
    { istruzione: strIngredient3, qty: strMeasure3 },
    { istruzione: strIngredient4, qty: strMeasure4 },
    { istruzione: strIngredient5, qty: strMeasure5 },
  ];

  const cocktailDetails = {
    drinkName,
    type,
    category,
    strGlass,
    strInstructionsList,
    strInstructionsIT,
    strInstructions,
  };

  return (
    <Wrapper
      onMouseEnter={showInfo}
      onMouseLeave={hideInfo}
      onClick={toggleInfo}
    >
      <div
        className="img"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className={
          show ? 'card-text container show-info' : 'card-text container'
        }
      >
        <div className="see-more-btn brand-color">
          <SingleCocktailScreen
            {...cocktailDetails}
            {...strInstructionsList}
          ></SingleCocktailScreen>
        </div>
      </div>

      <div className="card-text-sm container">
        <SingleCocktailScreen
          {...cocktailDetails}
          {...strInstructionsList}
        ></SingleCocktailScreen>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  cursor: pointer;
  position: relative;
  width: 70%;
  margin: auto;
  border-radius: var(--img-radius);
  display: grid;
  box-shadow: var(--light-shadow);

  .img {
    width: 100%;
    height: 300px;
    border-radius: var(--img-radius);
  }

  .card-text-sm {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 250px;
    overflow: auto;
  }

  .card-text,
  .card-text-sm {
    justify-content: space-between;
    align-items: center;
  }

  .card-text {
    display: none;
  }

  .see-more-btn {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.7rem;
    transition: var(--transition);
  }

  .see-more-btn:hover svg,
  .see-more-btn:hover h5 {
    color: var(--byzantine);
  }

  .see-more-btn:hover h5 {
    text-decoration: underline;
  }
  @media screen and (min-width: 992px) {
    width: 100%;
    margin: unset;

    .card-text {
      position: absolute;
      bottom: 0;
      overflow: hidden;
      height: 0;
      opacity: 0;
      width: 100%;
      background-color: transparent;
      color: var(--text-color);
      transition: var(--transition);
      display: flex !important;
    }

    .show-info {
      background-color: transparent;
      background-color: rgba(0, 0, 0, 0.8);
      opacity: 1;
      height: 100%;
      overflow: auto;
    }
    .card-text-sm {
      display: none;
    }
  }
`;
export default Cocktail;
