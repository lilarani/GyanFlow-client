import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Team.css';

const Team = () => {
  return (
    <div className="my-44 bg-[#0f172a] py-10">
      <h1 className="text-5xl font-bold text-center text-white">Team</h1>
      <Swiper
        loop={true}
        speed={1000}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 }, // When screen width is ≥640px
          1024: { slidesPerView: 3 }, // When screen width is ≥1024px
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
