import React from "react";

export function Card(props) {
	return (
		<>
			<div className="card" style={{ width: "18rem;" }}>
				<img src="" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vestibulum rutrum ac neque quis dictum. Ut nec tellus
						tempus, finibus sapien mattis, feugiat sem. Aenean a
						pellentesque sapien. Suspendisse ligula nibh, efficitur
						eget turpis rhoncus, volutpat tincidunt nisi. Proin
						facilisis erat placerat sodales lacinia.
					</p>
					<a href="#" className="btn btn-primary">
						Find out more
					</a>
				</div>
			</div>
		</>
	);
}

export default Card;
