import React, {useEffect, useState} from "react"
import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';


//importing styles
import styles from "../../styles/GenNews.module.css"
import 'swiper/swiper.scss';

//adding components
import NewsArticle from "./NewsArticle"

const GenNews = () =>{

    const key = "3f2161859a5a4e52b7a8b16ff3493635";
    

    const [gennews, setgennews] = useState(null);
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`)
        .then(data => {setgennews(data.data)})
        .catch(error => {console.log(error)})}
        , []);

    return(
        <div className="general-news">
            {gennews && (
                <div className={styles.gen_news_info}>
                <Swiper
                spaceBetween={5}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {gennews.articles.map((article)=>(    
                        <SwiperSlide>
                            <NewsArticle gennews = {article}/>
                        </SwiperSlide>                
                        ))
                    }        
                </Swiper>
                </div>
            )}

        </div>
    );
}

export default GenNews;