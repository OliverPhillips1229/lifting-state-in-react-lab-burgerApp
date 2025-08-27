// src/components/BurgerStack/BurgerStack.jsx


import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ ingredients, removeFromBurger }) => {
  return (
    <ul>
      {ingredients.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        ingredients.map((ingredient, idx) => (
          <Ingredient
            key={idx}
            ingredient={ingredient}
            onAction={() => removeFromBurger(idx)}
            actionType="remove"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
