import React from 'react'
import Button from '@material-ui/core/Button';
import {ArrowForward} from '@material-ui/icons'


//adding styles
import styles from '../../styles/NewsArticle.module.css'

const NewsArticle = (props) => {

    function OpenNewTab(){
        window.open(props.gennews.url, "_blank");
        
    }

    return (
        <div className={styles.card}>
            <div >
                <img className={styles.card_image} src={props.gennews.urlToImage} alt=""/>
            </div>
            <div className={styles.card_text}>
                <h3 className={styles.card_text_h2}>{props.gennews.title}</h3>
                <span className="news__author">{props.gennews.author}</span>
                <p className={styles.card_text_p}>{props.gennews.description}</p>
                <Button color="primary" variant="outlined" size="small" endIcon ={<ArrowForward/>} style={{float:'right'}} onClick={() => OpenNewTab()}> Read more </Button>
                <span className={styles.card_text_date} style={{clear: 'both important'}}>{props.gennews.publishedAt}  </span>
                <span className="news__source">{props.gennews.source.name}</span>
            </div>
            
            
        </div>
    )
}

export default NewsArticle