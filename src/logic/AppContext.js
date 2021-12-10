import React from "react";
const AppContext = React.createContext({
	meals: [],
	setVisable: "",
	visable: "",
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
});

export default AppContext;
