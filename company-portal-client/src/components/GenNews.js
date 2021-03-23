import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"

const GenNews = () =>{
    return(
        <div className="general-news">
            <FontAwesomeIcon icon={faAngleLeft}/>
            <h1>General News</h1>
            <FontAwesomeIcon icon={faAngleRight}/>
        </div>
    );
}

export default GenNews;