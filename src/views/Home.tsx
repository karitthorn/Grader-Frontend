import CenterContainer from "../layout/CenterLayout";

const Home = () => {
	return (
		<CenterContainer>
			<h1 className="mx-auto text-6xl font-bold">
				Welcome to <span className="text-green-500">Grader</span>
			</h1>
		</CenterContainer>
	);
};

export default Home;
