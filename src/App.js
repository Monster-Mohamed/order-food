import React, { Fragment } from "react";
import "./style/app.scss";
import Header from "./components/layout/Header/Header";
import Meals from "./components/meals/Meals";
import Popup from "./components/design/popup/Popup";

const App = () => {
	return (
		<Fragment>
			<Header />
			<Meals />
			<Popup />
		</Fragment>
	);
};

export default App;
