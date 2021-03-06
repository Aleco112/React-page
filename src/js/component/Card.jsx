import React from "react";

export function Card(props) {
	return (
		<>
			<div
				className="card d-flex justify-content-between row "
				style={{ width: "18rem" }}>
				<img src={props.image} />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text} </p>
					<a href="#" className="btn btn-primary">
						Find out more
					</a>
				</div>
			</div>
		</>
	);
}

export default Card;
