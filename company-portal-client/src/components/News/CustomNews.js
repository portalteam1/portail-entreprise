import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"


const CustomNews = () =>{
    return(
        <div className="custom-news">
            <FontAwesomeIcon icon={faAngleLeft}/>
            <h1>Custom News</h1>
            <FontAwesomeIcon icon={faAngleRight}/>
        </div>
    );
}

export default CustomNews;