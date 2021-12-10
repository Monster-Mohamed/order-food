import React, { useContext } from "react";
import AppContext from "../../logic/AppContext";
import MealForm from "./MealForm";

const MealCard = ({ el }) => {
	const appContext = useContext(AppContext);
	const onAddToCart = (amount) => {
		appContext.addItem({
			id: el.id,
			name: el.title,
			amount: amount,
			price: el.price,
		});
	};

	return (
		<div className="card" key={el.id}>
			<div className="left">
				<h2>{el.title}</h2>
				<p>{el.desc}</p>
				<span>{el.price}</span>
			</div>
			<MealForm onAddToCart={onAddToCart} id={el.id} />
		</div>
	);
};

export default MealCard;
