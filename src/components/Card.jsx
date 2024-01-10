import React from "react";

function Card({ city }) {
  var tempMin, tempMax;
  var fecha = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      {Array.isArray(city) &&
        city.map((e) => {
          tempMax = e.forecast.forecastday[0].day.maxtemp_c;
          tempMin = e.forecast.forecastday[0].day.mintemp_c;
          return (
            <div className="flex flex-col py-5" id="1">
              <div>
                <h1 className="text-3xl">
                  {e.location.name}, {e.location.country}
                </h1>
                <label>{fecha}</label>
                <div className="flex flex-col items-center py-6 sm:flex-row">
                  <div className="flex flex-row justify-around min-[320px]:w-4/5 sm:w-full ">
                    <img
                      src={e.current.condition.icon}
                      alt={e.current.condition.text}
                      className="w-40"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-4xl sm:text-7xl">
                        {Math.round(e.current.temp_c)} C°
                      </p>
                      <p>{e.current.condition.text}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 content-center min-[320px]:w-4/5 max-sm:border-t sm:w-full sm:border-l">
                    <div className="mt-3">
                      <p className="text-2xl font-light">
                        {Math.round(tempMax)} C°
                      </p>
                      <label className="text-gray-300">Maxima</label>
                    </div>
                    <div className="mt-3">
                      <p className="text-2xl font-light">
                        {Math.round(e.current.wind_kph)} k/h
                      </p>
                      <label className="text-gray-300">Viento</label>
                    </div>
                    <div className="mt-3">
                      <p className="text-2xl font-light">
                        {Math.round(e.current.humidity)}%
                      </p>
                      <label className="text-gray-300">Humedad</label>
                    </div>
                    <div className="mt-3">
                      <p className="text-2xl font-light">
                        {Math.round(tempMin)} C°
                      </p>
                      <label className="text-gray-300">Minima</label>
                    </div>
                    <div className="mt-3">
                      <p className="text-2xl font-light">
                        {e.current.vis_km} km
                      </p>
                      <label className="text-gray-300">Visibilidad</label>
                    </div>
                    <div className="mt-3">
                      <p className="text-2xl font-light">
                        {e.current.pressure_mb} hPa
                      </p>
                      <label className="text-gray-300">Presion</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Card;
