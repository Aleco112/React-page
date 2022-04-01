import React from "react";
import Card from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card
				title="Car"
				image="https://picsum.photos/seed/picsum/200/300"
				text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content"
			/>
			<Card
				title="house"
				image="https://picsum.photos/seed/picsum/200/300"
				text="Etiam eu posuere metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis suscipit mauris, sed venenatis nisl tincidunt vel. Nam viverra neque finibus, pulvinar dolor nec, lacinia dui. Nulla sodales sit amet dui nec aliquam. Nunc finibus sollicitudin accumsan. Etiam felis neque, molestie vel enim et, dapibus dapibus risus. Integer tempus ultricies sem nec fringilla. Mauris blandit nibh vitae ante pretium, vel interdum metus condimentum."
			/>
			<Card
				title="yacht"
				image="https://picsum.photos/seed/picsum/200/300"
				text="Curabitur venenatis fringilla massa, sit amet feugiat ligula auctor vel. Curabitur venenatis eu lorem eu elementum. Ut orci lacus, sodales ut risus ac, vestibulum gravida justo. In congue ullamcorper eros non mollis. Curabitur ultrices ultrices tellus, eu elementum turpis luctus vitae. Donec eu libero id nibh tincidunt feugiat eget eu lectus. Quisque odio massa, tincidunt non lacinia ut, eleifend nec justo. Morbi id lorem non massa blandit tristique. Nullam laoreet mi eu ex lacinia, at luctus mi congue."
			/>
			<Card
				title="Hotels"
				image="https://picsum.photos/seed/picsum/200/300"
				text="Aliquam vulputate mauris ac libero finibus, ac posuere sapien varius. Duis mattis leo est, nec finibus tortor dapibus eu. Vivamus porta volutpat scelerisque. In accumsan justo id dictum molestie. Nunc id justo orci. Nullam commodo erat ut urna pulvinar luctus. Duis hendrerit quis lorem in commodo. Vestibulum iaculis suscipit ornare. Maecenas malesuada a orci eu mattis. Proin justo est, varius ut consequat eu, efficitur in nibh. Aenean finibus augue ipsum, eget dictum arcu viverra eget."
			/>
		</div>
	);
};

export default Home;
