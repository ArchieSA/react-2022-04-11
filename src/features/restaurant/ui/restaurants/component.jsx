import { Restaurant } from "../restaurant/component";
import styles from './styles.module.scss';
import { useState } from "react";

export const Restaurants = ({ restaurants }) => {

	let [selectedRestaurant, setSelectedRestaurant] = useState(0);

	return (
		<div>
			
			<div className={styles.actions}>
				{restaurants.map((restaurant, index) => (
					<button
						className={styles.action}
						onClick={() => { setSelectedRestaurant(index) }}
						key={restaurant.id}>
						{restaurant.name}
					</button>
				))}
			</div>

		  <Restaurant restaurant={restaurants[selectedRestaurant]} />	
	</div>
  );
};
