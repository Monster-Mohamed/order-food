import React from "react";

const PopupItems = ({ item, onRemove }) => {
	return (
		<div className="popup-header-parent" key={item.id}>
			<p className="popup-title">{item.name}</p>
			<p className="popup-price">${item.price}</p>
			<p className="popup-amount">x{item.amount}</p>
			<p onClick={onRemove} className="popup-remove">
				X
			</p>
		</div>
	);
};

export default PopupItems;
