import React, { useRef, useState } from "react";
import Button from "../design/Button";
import Input from "../design/Input";

const MealForm = ({ id, onAddToCart }) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();
	const submitHandler = (eo) => {
		eo.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNo = +enteredAmount;
		if (
			enteredAmount.length === 0 ||
			enteredAmountNo < 1 ||
			enteredAmountNo > 5
		) {
			setAmountIsValid(false);
			return;
		}

		onAddToCart(enteredAmountNo);
	};
	return (
		<form className="right" onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: `amount_${id}`,
					className: "meal_inp",
					type: "number",
					min: "1",
					max: "5",
					defaultValue: "1",
				}}
			/>
			<Button>+ Add</Button>
			{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
};

export default MealForm;
