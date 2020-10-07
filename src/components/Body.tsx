export function Body() {
  return (
    <div className="relative z-10 flex items-center justify-center w-full min-h-screen">
      <div className="relative z-20 flex flex-col items-center justify-center text-white ">
        <p className="text-2xl font-semibold text-center text-white">
          <span className="text-4xl">Welcome</span> <br />
          would you like to place your order?
        </p>
        <a href="">
          <button className="z-30 px-4 py-2 my-8 font-medium tracking-wide transition duration-300 ease-in-out border rounded border:bg-transparent hover:border-primary-700 hover:text-primary-700">
            Look at our Menu
          </button>
        </a>
      </div>
      <div className="absolute top-0 flex flex-col max-h-screen min-h-screen bg-black pointer-events-none">
        <img
          className="w-full max-h-screen opacity-25 pointer-events-none "
          src="background.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
