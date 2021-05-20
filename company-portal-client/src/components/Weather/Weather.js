import React, { useState,useEffect } from 'react';
import { usePosition } from 'use-position';

import styles from '../../styles/Weather.module.css';

const api = {
    key: "30f10ec8bdd751c02d10d863e0504674",
    base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }
   const Default= ()=> {
       /*const { latitude, longitude, error } = usePosition();
       useEffect(() => {
           if (latitude && longitude && !error) {
               // Fetch weather data here.
               console.log('lat:'+latitude +' long: '+longitude);
           } else{
               console.log('error');

           }
       }, []);*/
     /*  if (navigator.geolocation) {
           console.log(navigator.geolocation);
       } else {
           alert("Sorry Not available!");
       }*/
      const query='sousse';
       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
           .then(res => res.json())
           .then(result => {
               setWeather(result);
               setQuery('');
               console.log(result);
           });
    }

    const dateBuilder = (d) => {
        let months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
        let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    const mainweather = (typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? styles.warm : 'app') : 'app';

    return (
        <div className={styles.main}>
        <div className={`${styles.app} ${mainweather}`}>
            <main>
                <div className={styles.search_box}>
                    <input
                        type="text"
                        className={styles.search_bar}
                        placeholder="Search..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className={styles.location}>{weather.name}, {weather.sys.country}</div>
                            <div className={styles.date}>{dateBuilder(new Date())}</div>
                        </div>
                        <div className={styles.weather_box}>
                            <div className={styles.temp}>
                                {Math.round(weather.main.temp)}°c
                            </div>
                            <div className={styles.weather}>{weather.weather[0].main}</div>
                        </div>
                    </div>
                ) : (<div> {Default()}</div>)}
            </main>
        </div>
        </div>
    );
}
export default Weather;