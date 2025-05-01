import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function OurAchievementSection() {
  return (
    <div className="w-10/12 mx-auto">
      <div>
        <div className="flex justify-center items-center text-center md:my-10 mt-12">
          <div className="md:w-2/3">
            <h2 className="font-bold  md:my-4 text-xl md:text-5xl">
              Our Achievements
            </h2>
          </div>
        </div>
      </div>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[
          Autoplay,
          Pagination,
          Navigation,
          Scrollbar,
          A11y,
          EffectFlip,
        ]}
        onSwiper={() => {}}
        onSlideChange={() => {}}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="lg:flex w-full bg-cover lg:h-[400px] ">
            <div className="h-full  flex-1 p-8">
              <img
                className="h-full w-full rounded-lg"
                src="https://mbs.edu/-/media/1-MBS-Images/News-Photos/2023/05-May/2302-Virtual-Classroom-9_1200.jpg?rev=7ddb2629a77344e4b0d611d29b93ae99"
                alt=""
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className=" flex w-11/12 md:w-9/12 text-center lg:text-left  justify-center flex-col">
                <h2 className="text-lg md:text-4xl my-3 font-bold">
                  Responsive Web Design Excellence
                </h2>
                <p>
                  Successfully developed and optimized multiple websites with a
                  mobile-first approach, ensuring seamless user experience
                  across all devices. Successfully developed and optimized
                  multiple websites with a mobile-first approach, ensuring
                  seamless user experience across all devices. Successfully
                  developed and optimized multiple websites with a mobile-first
                  approach, ensuring seamless user experience across all
                  devices.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex w-full bg-cover lg:h-[400px]">
            <div className="h-full   p-8 flex-1">
              <img
                className="h-full rounded-lg  w-full"
                src="https://as2.ftcdn.net/jpg/03/13/37/31/1000_F_313373175_GeVt0agOTCTZFauNpiM87oKhD0eYjjXp.jpg"
                alt=""
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className=" flex w-11/12 md:w-9/12   text-center lg:text-left   justify-center flex-col">
                <h2 className="text-lg md:text-4xl my-3 font-bold">
                  Full-Stack Web Application Development
                </h2>
                <p>
                  Built and deployed dynamic web applications using React.js,
                  Node.js, Express.js, and MongoDB, enhancing functionality and
                  user engagement. Built and deployed dynamic web applications
                  using React.js, Node.js, Express.js, and MongoDB, enhancing
                  functionality and user engagement. Built and deployed dynamic
                  web applications using React.js, Node.js, Express.js, and
                  MongoDB, enhancing functionality and user engagement.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex w-full bg-cover lg:h-[400px]">
            <div className="h-full p-8 flex-1">
              <img
                className="h-full rounded-lg  w-full"
                src="https://as1.ftcdn.net/jpg/09/91/63/06/1000_F_991630699_7WdCHjcsx3AvboDycutfSZiTp8zwRxxu.jpg"
                alt=""
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className=" flex w-11/12 md:w-9/12   text-center lg:text-left   justify-center flex-col">
                <h2 className="text-lg md:text-4xl my-3 font-bold">
                  Optimized Performance & SEO Implementation
                </h2>
                <p>
                  Improved website speed and performance using best practices in
                  JavaScript, CSS, and image optimization, resulting in better
                  SEO rankings and user retention. Improved website speed and
                  performance using best practices in JavaScript, CSS, and image
                  optimization, resulting in better SEO rankings and user
                  retention. Improved website speed and performance using best
                  practices in JavaScript, CSS, and image optimization,
                  resulting in better SEO rankings and user retention.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex w-full bg-cover lg:h-[400px]">
            <div className="h-full   p-8 flex-1">
              <img
                className="h-full rounded-lg  w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oULNATUQC-e6GakzeSqHVce-MDtdX44kaxPUVF-2AnH6LzCaDu1683N3w6yHqBwnLaA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className=" flex w-11/12 md:w-9/12   text-center lg:text-left   justify-center flex-col">
                <h2 className="text-lg md:text-4xl my-3 font-bold">
                  Firebase Integration & Authentication
                </h2>
                <p>
                  Implemented Firebase authentication and database solutions,
                  enabling secure user login, real-time data management, and
                  seamless user experiences. Implemented Firebase authentication
                  and database solutions, enabling secure user login, real-time
                  data management, and seamless user experiences. Implemented
                  Firebase authentication and database solutions, enabling
                  secure user login, real-time data management, and seamless
                  user experiences.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex w-full bg-cover lg:h-[400px]">
            <div className="h-full   p-8 flex-1">
              <img
                className="h-full rounded-lg  w-full"
                src="https://as2.ftcdn.net/jpg/06/00/20/05/1000_F_600200573_4WkQ0nKVsFGdZXjHOdAFpj3EWhkssJIc.jpg"
                alt=""
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className=" flex w-11/12 md:w-9/12   text-center lg:text-left   justify-center flex-col">
                <h2 className="text-lg md:text-4xl my-3 font-bold">
                  Version Control & Collaboration with GitHub
                </h2>
                <p>
                  Effectively managed projects using GitHub, ensuring smooth
                  collaboration, version control, and deployment efficiency.
                  Effectively managed projects using GitHub, ensuring smooth
                  collaboration, version control, and deployment efficiency.
                  Effectively managed projects using GitHub, ensuring smooth
                  collaboration, version control, and deployment efficiency.
                  Effectively managed projects using GitHub, ensuring smooth
                  collaboration, version control, and deployment efficiency.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
