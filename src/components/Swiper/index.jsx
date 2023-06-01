import { Swiper as Swip, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { MovieCard } from "../MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import { Styled } from "./Swiper.styled";

export const Swiper = ({ movie }) => {
  return (
    <Styled>
      <Swip
        breakpoints={{
          1400: {
            width: 1200,
            slidesPerView: 5,
          },
          1200: {
            width: 992,
            slidesPerView: 4,
          },
          992: {
            width: 768,
            slidesPerView: 3,
          },
          768: {
            width: 576,
            slidesPerView: 2,
          },
          576: {
            width: 320,
            slidesPerView: 1,
          },
        }}
        modules={[Navigation]}
        spaceBetween={30}
        navigation
        loop="true"
      >
        {movie.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <MovieCard movie={item} />
            </SwiperSlide>
          );
        })}
      </Swip>
    </Styled>
  );
};
