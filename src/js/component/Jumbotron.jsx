import React from "react";

export function Jumbotron(props) {
	return (
		<>
			<div className="jumbotron ">
				<h1 className="display-4"> A Warm Welcome </h1>
				<p className="lead">
					ivamus a posuere lacus, non luctus est. Ut et urna at nisl
					sollicitudin aliquam. Duis luctus eget ante eget bibendum.
					Aenean ac nisi ut felis dictum feugiat tincidunt eget lorem.
					Nunc ac sem ultricies, maximus sem nec, lobortis erat. Etiam
					aliquam a urna sed iaculis. Donec congue nisl tempus semper
					tincidunt. Fusce non orci enim. Proin lacus ex, rutrum vel
					mi sagittis, congue cursus nulla.
				</p>

				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						call action
					</a>
				</p>
			</div>
		</>
	);
}
