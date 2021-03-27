import React from "react";

//adding style
import "./Home.css";

//adding components
import Blog from "../../components/Blog"
import Weather from "../../components/Weather"
import GenNews from "../../components/GenNews";
import CustomNews from "../../components/CustomNews";

const Home = () => {
  return (
    <div className="container">
      <div className="news-container">
        <div className="home-general-news">
          <GenNews />
        </div>
        <div className="home-custom-news">
          <CustomNews />
        </div>
      </div>
      <div className="home-blog-container">
        <Blog/>
      </div>
      <div className="home-weather-container">
        <Weather/>
      </div>
      <h1 className="text-center" style={{ paddingTop: "30%" }}></h1>
    </div>
  );
};
export default Home;
