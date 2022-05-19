export const FullProduct = ({ name, price, ingredients }) => (
  <div>
    <div>name: {name}</div>
    <div>price: {price}</div>
    <div>ingredients: {ingredients.map((ingredient, index) => (
      <div key={index}>{ingredient}</div>
    ))}</div>
  </div>
)