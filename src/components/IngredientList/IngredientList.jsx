// src/components/IngredientList/IngredientList.jsx


import Ingredient from '../Ingredient/Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          ingredient={ingredient}
          onAction={addToBurger}
          actionType="add"
        />
      ))}
    </ul>
  );
};

export default IngredientList;
