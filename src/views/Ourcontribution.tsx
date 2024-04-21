import CenterContainer from "../layout/CenterLayout";

const Ourcontribution = () => {
  return (
    <CenterContainer>
		<h1 className=" animate-bounce text-6xl mb-1">🌟</h1>
      <h1 className="mx-auto text-6xl font-bold">
        Thankyou <span className="text-green-500">ME-LAB</span>
      </h1>


      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-10">
        Project หลักจาก : https://github.com/KanonKC
        <br />
        พัฒนาต่อโดย : mike-lab
        <br />
        https://github.com/karitthorn/Grader-Frontend
      </p>

      {/* <div className="my-5"></div> */}

      {/* <div className="flex justify-center gap-2">
				<Button className="text-lg">Login</Button>
				<Button className="text-lg">Explore The Problems</Button>
			</div> */}
    </CenterContainer>
  );
};

export default Ourcontribution;