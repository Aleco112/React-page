import React from "react";
import Card from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar className=" d-flex " />
			<div className=" border border-1 w-50 m-auto mt-2">
				<Jumbotron className="d-flex pe-3" />
				<div className="d-flex justify-content-around m-2 ">
					<Card
						title="Car"
						image="https://picsum.photos/seed/picsum/200/300"
						text="Curabitur venenatis fringilla massa, sit amet feugiat ligula auctor vel. Curabitur venenatis eu lorem eu elementum. Ut orci lacus, sodales ut risus ac, vestibulum gravida justo. In congue ullamcorper eros non mollis. Curabitur ultrices ultrices tellus, eu elementum turpis luctus vitae. Donec eu libero id nibh tincidunt feugiat eget eu lectus. Quisque odio massa, tincidunt non lacinia ut, eleifend nec justo. Morbi id lorem non massa blandit tristique. Nullam laoreet mi eu ex lacinia, at luctus mi congue."
					/>
					<Card
						title="house"
						image="https://picsum.photos/seed/picsum/200/300"
						text="Curabitur venenatis fringilla massa, sit amet feugiat ligula auctor vel. Curabitur venenatis eu lorem eu elementum. Ut orci lacus, sodales ut risus ac, vestibulum gravida justo. In congue ullamcorper eros non mollis. Curabitur ultrices ultrices tellus, eu elementum turpis luctus vitae. Donec eu libero id nibh tincidunt feugiat eget eu lectus. Quisque odio massa, tincidunt non lacinia ut, eleifend nec justo. Morbi id lorem non massa blandit tristique. Nullam laoreet mi eu ex lacinia, at luctus mi congue."
					/>
					<Card
						title="yacht"
						image="https://picsum.photos/seed/picsum/200/300"
						text="Curabitur venenatis fringilla massa, sit amet feugiat ligula auctor vel. Curabitur venenatis eu lorem eu elementum. Ut orci lacus, sodales ut risus ac, vestibulum gravida justo. In congue ullamcorper eros non mollis. Curabitur ultrices ultrices tellus, eu elementum turpis luctus vitae. Donec eu libero id nibh tincidunt feugiat eget eu lectus. Quisque odio massa, tincidunt non lacinia ut, eleifend nec justo. Morbi id lorem non massa blandit tristique. Nullam laoreet mi eu ex lacinia, at luctus mi congue."
					/>
					<Card
						title="Hotels"
						image="https://picsum.photos/seed/picsum/200/300"
						text="Curabitur venenatis fringilla massa, sit amet feugiat ligula auctor vel. Curabitur venenatis eu lorem eu elementum. Ut orci lacus, sodales ut risus ac, vestibulum gravida justo. In congue ullamcorper eros non mollis. Curabitur ultrices ultrices tellus, eu elementum turpis luctus vitae. Donec eu libero id nibh tincidunt feugiat eget eu lectus. Quisque odio massa, tincidunt non lacinia ut, eleifend nec justo. Morbi id lorem non massa blandit tristique. Nullam laoreet mi eu ex lacinia, at luctus mi congue."
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
