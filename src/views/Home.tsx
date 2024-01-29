import CenterContainer from "../layout/CenterLayout";

const Home = () => {
	return (
		<CenterContainer>

			<h1 className="mx-auto text-6xl font-bold">
				Welcome to <span className="text-green-500">Grader</span>
			</h1>

			{/* <div className="my-5"></div> */}

			{/* <div className="flex justify-center gap-2">
				<Button className="text-lg">Login</Button>
				<Button className="text-lg">Explore The Problems</Button>
			</div> */}

		</CenterContainer>
	);
};

export default Home;
