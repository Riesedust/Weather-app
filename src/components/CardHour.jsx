import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardHour({ city, isDay }) {
  function handleStyle(dia) {
    return "p-3 rounded-lg " + dia;
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function hora(time) {
    return time.split(" ")[1];
  }
  return (
    <div className="w-3/4 m-auto">
      <Slider {...settings}>
        {Array.isArray(city) &&
          city.map((e) => {
            return (
              <div className="x-3 p-3 rounded-lg">
                <div
                  className={
                    isDay
                      ? handleStyle("bg-sky-600")
                      : handleStyle("bg-gray-900")
                  }
                >
                  <p>{hora(e.time)}</p>
                  <img
                    className="m-auto"
                    alt={e.condition.text}
                    src={e.condition.icon}
                  ></img>
                  <p>{e.condition.text}</p>
                  <p>{Math.round(e.temp_c)} C°</p>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default CardHour;
