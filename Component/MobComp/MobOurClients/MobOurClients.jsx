import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

import { Container } from "react-bootstrap";

const MobOurClients = ({ logoData }) => {
  return (
    <Container
      fluid
      className="px-5 py-5"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="text-center mb-5">
        <h1 className="text-center" style={{ color: "#919191" }}>
          Our Clients
        </h1>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        className="mySwiper px-5"
        autoplay={{
          delay: 3000,
        }}
      >
        {(logoData || []).map((items) => {
          const { id, logo } = items;

          return (
             <SwiperSlide key={id}>
              <img src={logo} alt="Client Logo" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default MobOurClients;