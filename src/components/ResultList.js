import React from 'react'

const ResultList = ({item}) => {
  return (
    <div className="col-lg-6 col-md-6 mb-3">

    <div className="card p-4">
      <div className="d-flex">
        <h6 className="flex-grow-1 text-center sehirAdi">
          {item.name} - {item.sys.country}
        </h6>
      </div>

      <div className="d-flex flex-column temp mt-5 mb-3">
        <h1 className="mb-0 font-weight-bold" id="heading">
          {Math.ceil(item.main.temp)}° C{" "}
        </h1>
        <span className="small grey description">
          {item.weather[0].description}
        </span>
      </div>

      <div className="d-flex">
        <div className="temp-details flex-grow-1">
          <p className="my-1">
            <img
              src="https://i.imgur.com/B9kqOzp.png"
              height="17px"
              alt="Rüzgar hızı"
            />
            <span>&nbsp; {Math.ceil(item.wind.speed * 3.6)} km/saat</span>
          </p>

          <p className="my-1">
            <i className="fa fa-tint mr-2" aria-hidden="true"></i>
            <span> {item.main.humidity} % </span>
          </p>
        </div>

        <div>
          <img
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt="Hava durumu"
            width="100px"
          />
        </div>

      </div>

    </div>

  </div>
  )
}

export default ResultList