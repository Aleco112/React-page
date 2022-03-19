import React from "react";
import Card from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<nav>
				<Jumbotron />
				<Card
					title="Car"
					image="https://picsum.photos/200"
					text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content"
				/>
				<Card />
				<Card />
				<Card />
			</nav>
		</div>
	);
};

export default Home;
