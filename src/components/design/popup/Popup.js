/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useContext, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import AppContext from "../../../logic/AppContext";
import PopupItems from "./PopupItems";

const ModalOverlay = () => {
	const ctx = useContext(AppContext);
	const popupgrand = useRef();
	const pop = useRef();
	// Zoom Effect of Popup
	useEffect(() => {
		const popupGrandfather = popupgrand.current;
		const popup = pop.current;
		if (!ctx.visable) {
			popup.style.transform = "scale(0)";
			setTimeout(() => {
				popupGrandfather.style.display = "none";
			}, 300);
		} else {
			popupGrandfather.style.display = "flex";

			setTimeout(() => {
				popup.style.setProperty("transform", "scale(1)", "important");
			}, 200);
		}
	}, [ctx.visable]);

	const closePopup = (eo) => {
		eo.preventDefault();
		ctx.setVisable(false);
	};

	const cartItemRemoveHandler = (id) => {
		ctx.removeItem(id);
	};
	const cartItemAddHandler = (item) => {
		ctx.addItem(item);
	};

	const totalAmount = `${ctx.totalAmount.toFixed(2)}`;
	const hasItems = ctx.items.length > 0;
	return (
		<div className="popup-grandfather" ref={popupgrand}>
			<div className="popup" ref={pop}>
				{ctx.items.map((item) => {
					return (
						<PopupItems
							item={item}
							onRemove={cartItemRemoveHandler.bind(null, item.id)}
							onAdd={cartItemAddHandler.bind(null, item)}
						/>
					);
				})}
				<div className="popup-body-parent">
					<p className="popup-body-text">
						Total Amount: <span>${totalAmount}</span>
					</p>
				</div>
				<div className="popup-footer-parent">
					<div className="close-btn">
						<a onClick={closePopup} href="#">
							<span>Close</span>
						</a>
					</div>
					{hasItems && (
						<div className="close-btn">
							<a href="#">
								<span>Order</span>
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const Popup = ({ title, price }) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ModalOverlay title={title} price={price} />,
				document.getElementById("overlays")
			)}
		</Fragment>
	);
};

export default Popup;
