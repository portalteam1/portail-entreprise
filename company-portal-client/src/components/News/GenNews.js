import React, {useEffect, useState} from "react"
import axios from "axios"

//adding components
import NewsArticle from "./NewsArticle"



const GenNews = () =>{
    const [gennews, setgennews] = useState(null);
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3f2161859a5a4e52b7a8b16ff3493635`)
        .then(data => {setgennews(data.data)})
        .catch(error => {console.log(error)})}
        , []);

    return(
        <div className="general-news">
            {gennews && (
                <div className="gen-news-info">
                    {gennews.articles.map((article)=>(
                        <NewsArticle gennews = {article}/>
                        ))
                    }
                </div>
            )}
            
        </div>
    );
}

export default GenNews;