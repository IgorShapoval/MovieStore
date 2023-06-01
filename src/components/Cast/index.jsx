import { useEffect, useState } from "react";
import {
  getCastInfoById,
  getSerialsCastInfoById,
} from "../../services/movies-api";
import { CastImg, CastItem, Character, Name, Styled } from "./Cast.styled";
import { Title } from "../Title";
import { Swiper as Swip, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const Cast = ({ id, type }) => {
  const [movieCast, setMovieCast] = useState([]);

  if (type) {
    useEffect(() => {
      async function getCast() {
        try {
          const { cast } = await getSerialsCastInfoById(id);
          setMovieCast(cast.splice(0, 20));
        } catch (error) {}
      }

      getCast();
    }, [id]);
  } else {
    useEffect(() => {
      async function getCast() {
        try {
          const { cast } = await getCastInfoById(id);
          setMovieCast(cast.splice(0, 20));
        } catch (error) {}
      }

      getCast();
    }, [id]);
  }

  return (
    <>
      {movieCast.length > 0 && (
        <>
          <Title>CAST</Title>
          <Styled>
            <Swip
              breakpoints={{
                1400: {
                  width: 1200,
                  slidesPerView: 8,
                },
                1200: {
                  width: 992,
                  slidesPerView: 6,
                },
                992: {
                  width: 768,
                  slidesPerView: 4,
                },
                768: {
                  width: 576,
                  slidesPerView: 3,
                },
                576: {
                  width: 320,
                  slidesPerView: 2,
                },
                320: {
                  width: 320,
                  slidesPerView: 2,
                },
              }}
              modules={[Navigation]}
              spaceBetween={30}
              navigation
            >
              {movieCast.map(({ id, name, profile_path, character }) => {
                return (
                  <SwiperSlide key={id}>
                    <CastItem>
                      <CastImg>
                        <img
                          src={
                            profile_path
                              ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`
                              : "https://via.placeholder.com/138x175"
                          }
                          alt={name}
                        />
                      </CastImg>
                      <Name>{name}</Name>
                      <Character>{character}</Character>
                    </CastItem>
                  </SwiperSlide>
                );
              })}
            </Swip>
          </Styled>
        </>
      )}
    </>
  );
};
