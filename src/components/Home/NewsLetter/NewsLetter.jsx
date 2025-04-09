import Button from '@/components/customs/Button';
import newsLetterBg from '../../../assets/images/bg-shadow.png';
import newsImg from '../../../assets/images/newsletter.png';

const NewsLetter = () => {
  return (
    <div className="w-10/12 mx-auto bg-gradient-to-bl to-sky-100 from-[#bfb2f8]  bg-opacity-20 z-30 relative top-24 p-8 container border-[1px] border-gray-300">
      <div
        className="hero  flex justify-center "
        style={{
          backgroundImage: `url(${newsLetterBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content text-center w-full ">
          <div className=" gap-8 w-full  grid grid-cols-1 md:grid-cols-2">
            <div className=" w-full">
              <img src={newsImg} alt="" className="w-full h-72 rounded-lg" />
            </div>
            <div className="max-w-md flex flex-col justify-center  space-y-5 text-left">
              <h1 className="text-base md:text-3xl font-bold">
                Subscribe to our Newsletter
              </h1>
              <p className="text-gray-500 text-xs md:text-lg font-medium">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="flex  flex-col md:flex-row gap-3">
                <input
                  className=" px-2 border-[1px] border-gray-400 text-base text-black outline-none"
                  type="email"
                  placeholder="Enter your email"
                />
                <Button text={'Subscribe'}></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
