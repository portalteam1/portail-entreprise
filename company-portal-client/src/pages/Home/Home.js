import React from "react";

//adding style
import styles from "../../styles/Home.module.css";

//adding components
import Blog from "../../components/Blog"
import Weather from "../../components/Weather"
import Updates from "../../components/dailyupdates"
import GenNews from "../../components/News/GenNews";
import CustomNews from "../../components/News/CustomNews";

const Home = () => {
  return (
    <div className="container">
      <div className="news-container">
        <div className="home-general-news" >
          <GenNews className={styles.gennews}/>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default Home;
