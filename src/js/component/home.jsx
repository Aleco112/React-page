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
					image="https://scontent.fmia1-1.fna.fbcdn.net/v/t39.30808-6/275925800_466770025195409_6970503220756921358_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=fL9uDKD3OZAAX-fINB4&_nc_ht=scontent.fmia1-1.fna&oh=00_AT9nxvHGiiK4vBreD4OrTH6rlUIwNDEzYxCrI7gs0KTS7w&oe=623B7274"
					text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content"
				/>
				<Card
					title="house"
					image="https://scontent.fmia1-2.fna.fbcdn.net/v/t39.30808-6/275273173_10228984759830760_8934090800884237819_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-5&_nc_sid=843cd7&_nc_ohc=QTuxZrluP1wAX8vPQNd&tn=Ky4wsjO-bk2Y_Jy_&_nc_ht=scontent.fmia1-2.fna&oh=00_AT_OObxtnTVx0Peheptxg3kdIGdKm01-ieA4RXtJX06G5A&oe=623A933C"
					text="Etiam eu posuere metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis suscipit mauris, sed venenatis nisl tincidunt vel. Nam viverra neque finibus, pulvinar dolor nec, lacinia dui. Nulla sodales sit amet dui nec aliquam. Nunc finibus sollicitudin accumsan. Etiam felis neque, molestie vel enim et, dapibus dapibus risus. Integer tempus ultricies sem nec fringilla. Mauris blandit nibh vitae ante pretium, vel interdum metus condimentum."
				/>
				<Card
					title="yacht"
					image="https://scontent.fmia1-2.fna.fbcdn.net/v/t39.30808-6/275141771_5320295784656146_1493090382404824417_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=eSGhaD54JEwAX_QOWvm&_nc_ht=scontent.fmia1-2.fna&oh=00_AT8ruKv1IHr5O2H0Xur5HhVAWxolk6JRQsspw1a9oV62lA&oe=623C68C0"
					text="Curabitur venenatis fringilla massa, sit amet feugiat ligula auctor vel. Curabitur venenatis eu lorem eu elementum. Ut orci lacus, sodales ut risus ac, vestibulum gravida justo. In congue ullamcorper eros non mollis. Curabitur ultrices ultrices tellus, eu elementum turpis luctus vitae. Donec eu libero id nibh tincidunt feugiat eget eu lectus. Quisque odio massa, tincidunt non lacinia ut, eleifend nec justo. Morbi id lorem non massa blandit tristique. Nullam laoreet mi eu ex lacinia, at luctus mi congue."
				/>
				<Card
					title="Hotels"
					image="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.6435-9/57321637_1115739291963487_979702256628662272_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=u4qkQBy2QPMAX_b3YE6&_nc_ht=scontent.fmia1-2.fna&oh=00_AT-7OigCw7yz0MqnVREze7iD0cSDXcxiVmIZhm2ZaPyOew&oe=625C7E34"
					text="Aliquam vulputate mauris ac libero finibus, ac posuere sapien varius. Duis mattis leo est, nec finibus tortor dapibus eu. Vivamus porta volutpat scelerisque. In accumsan justo id dictum molestie. Nunc id justo orci. Nullam commodo erat ut urna pulvinar luctus. Duis hendrerit quis lorem in commodo. Vestibulum iaculis suscipit ornare. Maecenas malesuada a orci eu mattis. Proin justo est, varius ut consequat eu, efficitur in nibh. Aenean finibus augue ipsum, eget dictum arcu viverra eget."
				/>
			</nav>
		</div>
	);
};

export default Home;
