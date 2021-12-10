import React, { useContext } from "react";
import AppContext from "../../logic/AppContext";
import MealCard from "./MealCard";

const Meals = () => {
	const appContext = useContext(AppContext);
	const meal = appContext.meals.map((el) => {
		return <MealCard el={el} />;
	});

	return <div className="meal">{meal}</div>;
};

export default Meals;
