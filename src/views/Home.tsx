import CenterContainer from "../layout/CenterLayout";

const Home = () => {
  return (
    <CenterContainer>
		<h1 className=" animate-bounce text-6xl mb-1">🌟</h1>
      <h1 className="mx-auto text-6xl font-bold">
        Welcome to <span className="text-green-500">ME-LAB</span>
      </h1>

      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          ME-LAB
        </span>{" "}
        make it easy
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        ระบบการเรียนการ โค้ดผ่านเว็ปไซต์ me-lab
        <br />
        ง่ายเเละสะดวกสำหรับนิสิตเเละทุกๆท่านที่ต้องเขียนโค้ด
      </p>
      <button type="button" className=" mt-7 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-10">Login Now ➡️</button>
      <br/>
      <a className="text-xl font-normal text-gray-300  dark:text-gray-400  " href="/con">
      Our contribution
      </a>
      {/* <div className="my-5"></div> */}

      {/* <div className="flex justify-center gap-2">
				<Button className="text-lg">Login</Button>
				<Button className="text-lg">Explore The Problems</Button>
			</div> */}
    </CenterContainer>
  );
};

export default Home;
