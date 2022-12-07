import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/shoaib.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile1.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "Ahmad is an instructor here in my institute , and do well i recieved a hard worker comment from his students.( CEO : TechsLab )",
    },
    {
      img: profilePic2,
      review:
        "He meets the given promises , also provide best quality work",
    },
    {
      img: profilePic3,
      review:
        "This person can do the project on time.",
    },
    {
      img: profilePic4,
      review:
        "Ashfaq is efficient on his work and matches the requirement",

    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{ textAlign : "center" }} >{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;