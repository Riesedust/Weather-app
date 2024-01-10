import React from "react";

function CardDays({ city, isDay }) {
  function handleStyle(dia) {
    return (
      "flex flex-col my-2 rounded-lg justify-evenly items-center md:flex-row " +
      dia
    );
  }
  function changeDay(dia) {
    var date = new Date(dia);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    date = date.toLocaleDateString("en-us", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    return date;
  }
  return (
    <div className="w-3/4 m-auto flex flex-col sm:w-2/3 md:w-3/4">
      <h1>Next 3 days</h1>
      {Array.isArray(city) &&
        city.map((e) => {
          return (
            <div
              className={
                isDay ? handleStyle("bg-sky-600") : handleStyle("bg-gray-900")
              }
            >
              <p>{changeDay(e.date)}</p>
              <div className="flex flex-row items-center justify-evenly w-1/2 md:w-1/3 md:py-3 ">
                <img
                  alt={e.day.condition.text}
                  src={e.day.condition.icon}
                ></img>
                <div className="flex flex-col">
                  <p className="font-light text-xl">
                    {Math.round(e.day.avgtemp_c)} C°
                  </p>
                  <p className="text-sm md:ml-0">{e.day.condition.text}</p>
                </div>
              </div>
              <div className="flex flex-row justify-evenly w-full md:w-auto md:flex-col">
                <p>{Math.round(e.day.daily_chance_of_rain)}%</p>
                <p className="text-gray-300 md:ml-0"> Rain</p>
              </div>

              <div className="flex flex-row  justify-evenly w-full md:w-auto md:flex-col">
                <p>{Math.round(e.day.mintemp_c)} C°</p>
                <p className="text-gray-300   md:ml-0"> Min</p>
              </div>
              <div className="flex flex-row  justify-evenly w-full md:w-auto md:flex-col">
                <p>{Math.round(e.day.maxtemp_c)} C°</p>
                <p className="text-gray-300  md:ml-0"> Max</p>
              </div>
              <div className="flex flex-row justify-evenly w-full md:w-auto  md:flex-col">
                <p>{e.day.maxwind_kph} k/h</p>
                <p className="text-gray-300  md:ml-0"> Wind</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CardDays;
