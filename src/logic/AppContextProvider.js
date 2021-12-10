import React, { useReducer, useState } from "react";
import AppContext from "./AppContext";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD_CART") {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		const existCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);

		const existCartItem = state.items[existCartItemIndex];
		let updatedItems;
		if (existCartItem) {
			const updatedItem = {
				...existCartItem,
				amount: existCartItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	} else if (action.type === "REMOVE_CART") {
		const existCartItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existItem = state.items[existCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existItem.price;
		let updatedItems;
		if (existItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			const updatedItem = { ...existItem, amount: existItem.amount - 1 };
			updatedItems = [...state.items];
			updatedItems[existCartItemIndex] = updatedItem;
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

const AppContextProvider = ({ children }) => {
	const [meals, setMeals] = useState([
		{
			id: 1,
			title: "Chicken",
			desc: "Ummy Chicken !!",
			price: 14.99,
		},
		{
			id: 2,
			title: "Meat",
			desc: "Spicy Meat !!",
			price: 39.99,
		},
		{
			id: 3,
			title: "Hamburger",
			desc: "Hoot Hamburger !!",
			price: 10.99,
		},
		{
			id: 4,
			title: "Meat with Chicken",
			desc: "Very ummy and hot Chicken with meat !!!",
			price: 69.99,
		},
	]);
	const [visable, setVisable] = useState(false);

	const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

	const addItemToCart = (item) => {
		cartDispatch({ type: "ADD_CART", item: item });
	};
	const removeItemFromCart = (id) => {
		cartDispatch({ type: "REMOVE_CART", id: id });
	};

	return (
		<AppContext.Provider
			value={{
				meals: meals,
				setVisable: setVisable,
				visable: visable,
				items: cartState.items,
				totalAmount: cartState.totalAmount,
				addItem: addItemToCart,
				removeItem: removeItemFromCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
