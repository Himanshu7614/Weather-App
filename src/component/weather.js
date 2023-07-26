import React,{useState, useEffect} from 'react';
import '../App.css';
import Weathercard from './weathercard';

function Weather(){
    const[searchValuee, setSearchValue] = useState("london");
    const [tempInfo, setInfo] = useState({});
    const getWeather= async()=>{
        try{
            let urlone=`https://api.openweathermap.org/data/2.5/weather?q=${searchValuee}&unitsmetric,uk&APPID=bee7f5b07893012bde506e17d0cfab96`;
            const res = await fetch(urlone);
            const data = await res.json(); 
            console.log(data);
            const {temp, humidity,pressure} = data.main;
            // const {main:weathermood} = data.Weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const { country , sunset} = data.sys;

            const weatherInfo={
                temp, 
                humidity,
                pressure,
                // weathermood,
                name,
                speed,
                country,
                sunset                
            };
            setInfo(weatherInfo);
        }
        catch(error){
            console.log(error);
            }
        };
        
        useEffect(()=>{
            getWeather();
        },[]);
    return(
        <>
        <section className="vh-100 sone">
            <div className="container py-5">
            <div className="row d-flex justify-content-center  align-items-center">
                <div className="col-md-10 col-lg-5 col-xl-5">                
                     <div class="input-group">
                    <div id="search-autocomplete" className="form-outline">
                        <input type="search" id="search" placeholder="Search" className="form-control searchterm m-2"
                         value={searchValuee}
                         onChange={(e)=>setSearchValue(e.target.value)}
                          />
                    </div>
                    <button type="button" className="btn btn-primary m-2 border-5" onClick={getWeather}>Search</button>
                    </div>
                    </div>
                    </div>

                    </div>
                    <Weathercard tempInfo={tempInfo} />
            </section>
        </>
    )
}

export default Weather;
