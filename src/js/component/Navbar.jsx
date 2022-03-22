import React from "react";
export function Navbar(props) {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					Bootstrap
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav d-flex flex-row-reverse">
						<a class="nav-link active" aria-current="page" href="#">
							disabled
						</a>
						<a class="nav-link" href="#">
							Features
						</a>
						<a class="nav-link" href="#">
							Pricing
						</a>
						<a class="nav-link disabled">home</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
