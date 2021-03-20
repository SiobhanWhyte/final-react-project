import React from "react";
import Icons from "./Icons";
import Time from "./Time";
import Unit from "./Unit";
import moment from "moment";

export default function WeatherDescription(props) {
  return (
    <div className="WeatherDescription">
     <div className="col">
     <p className="text-uppercase fs-1 fw-bolder">{props.data.city}</p>
          <Time />
        <p className="p-1 text-capitalize fw-bold">{props.data.description}</p>
        <Icons code={props.data.icon} /><Unit fahrenheit={props.data.temperature} />
        </div>
        
        <div className="row-auto m-2 p-4 justify-content-md-center">
        <div className="row m-1">
        
        <div className="col-5 p-1"><p className="text-start">Wind: {Math.round(props.data.wind)} mph</p></div>
        <div className="col-5 p-1"><p className="text-start">Visibility: {Math.round((props.data.visibility) / 914)} mi</p></div>
        </div>
     <div className="row m-1"> 
     <div className="col-5 p-1"><p className="text-start">High: {Math.round(props.data.high)}° / Low: {Math.round(props.data.low)}°</p></div> 
     <div className="col-5 p-1"><p className="text-start">Humidity: {Math.round(props.data.humidity)}%</p></div>
     </div>
     <div className="row m-1">
       <div className="col-5 p-1"><p className="text-start">Sunrise: {moment(props.data.sunrise *1000).format('LT')}</p></div>   
     <div className="col-5 p-1"><p className="text-start ">Sunset: {moment(props.data.sunset *1000).format('LT')}</p></div>
    </div>
    </div>
</div>
  );
}