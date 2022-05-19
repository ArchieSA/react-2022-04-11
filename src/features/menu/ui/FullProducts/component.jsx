import { FullProduct } from "../FullProduct/component";

export const Products = ({ products }) => (
  <div>
    {products.map((product) =>
      <FullProduct
        key={product.id}
        name={product.name}
        price={product.price}
        ingredients={product.ingredients}
      />
    )}
  </div>
)