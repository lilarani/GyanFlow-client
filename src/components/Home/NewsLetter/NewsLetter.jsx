import newsLetterBg from '../../../assets/images/bg-shadow.png';

const NewsLetter = () => {
  return (
    <div className="bg-sky-50 bg-opacity-20 z-30 relative top-32 p-5 container  mx-auto border-[1px] ">
      <div
        className="hero p-10 flex justify-center"
        style={{
          backgroundImage: `url(${newsLetterBg})`,
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="hero-content text-center ">
          <div className="max-w-md flex flex-col justify-center items-center space-y-5">
            <h1 className="text-base md:text-2xl font-bold">
              Subscribe to our Newsletter
            </h1>
            <p className="text-gray-500 text-xs md:text-sm">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex  flex-col md:flex-row gap-3">
              <input
                className="px-3 py-1 border-[1px] border-gray-500 rounded-lg text-black outline-none"
                type="email"
                placeholder="Enter your email"
              />
              <button className=" bg-gradient-to-l from-pink-500 to-purple-500 text-black font-bold px-2 py-1 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
