import React from "react";
import styles from './styles.module.scss';

export const AllMenuPage = ({ allMenu }) => {
  console.log('allMenu: ', allMenu);

  return (
    <div className={styles.root}>
      <div className={styles.menuContainer}>
        <div className={styles.menuTitle}>Menu all restaurants</div>
        <div className={styles.menuHeader}>
          <div>Descriptions</div>
          <div>Prices</div>
        </div>
        <div className={styles.productContainer}>
          {
            allMenu?.map(item => <div key={item.id}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>{item.name}</div>
                <div className={styles.price}>{item.price}</div>
              </div>
              <div className={styles.ingredientLabel}>Ingredients</div>
              <ul className={styles.ingredientsContainer}>
                {
                  item?.ingredients?.map(ingredient => <li key={item.id + ingredient}>
                    <div className={styles.ingredient}>
                      {ingredient}
                    </div>
                  </li>)
                }
              </ul>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}