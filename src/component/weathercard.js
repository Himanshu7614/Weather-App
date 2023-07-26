import React from 'react';


const Weathercard= ({tempInfo}) => {
    const {
        temp, 
        humidity,
        pressure,
        // weathermood,
        name,
        speed,
        country,
        sunset                
    } = tempInfo;

    let time = sunset;
    let timeOne = new Date(time*100);
    let ctime = `${timeOne.getHours()}:${timeOne.getMinutes()}`;
    const chng = ((parseFloat({temp}) - 32) * 5) / 9;
  return (    
    <>
        <div className="container  center">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-10 col-lg-8 col-xl-6">
                
                    <div className="card bg-dark text-white stwo border-0">
                    <div className="bg-image stwo" >
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                        className="card-img" alt="weather" />
                        <div className="mask sthree"></div>
                    </div>
                    <div className="card-img-overlay text-dark p-5">
                        <h4 className="mb-0">{name}, {country}</h4>
                        <p className="display-2 my-3">{temp} °F</p>
                        <p className="mb-2">Feels Like: <strong></strong></p>
                        <h6>Humidity = {humidity}</h6>
                        <h6>Time = {ctime}</h6>
                        <h6>Pressure = {pressure}</h6>
                        <h6>Speed = {speed}</h6>


                    </div>
                    </div>
                </div>
            </div>
        </div>        
    </>
  );
}

export default Weathercard;
