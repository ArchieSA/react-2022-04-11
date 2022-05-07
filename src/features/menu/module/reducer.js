import { normalizedProducts } from "../../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedProducts.reduce((acc, entity) => {
    acc[entity.id] = entity;
<<<<<<< HEAD
    return acc
  }, {}),
  ids: normalizedProducts.map(({ id }) => id)
};


=======
    return acc;
  }, {}),
  ids: normalizedProducts.map(({ id }) => id),
};

>>>>>>> 0ac8f344a6ef9c343ba967842f202e2933922b5b
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
