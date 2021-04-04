import React from 'react'

//adding styles
import styles from '../../styles/NewsArticle.module.css'

const NewsArticle = (props) => {
    return (
        <div className={styles.card}>
            <div >
                <img className={styles.card_image} src={props.gennews.urlToImage} alt=""/>
            </div>
            <div className={styles.card_text}>
                <h2 className={styles.card_text_h2}>{props.gennews.title}</h2>
                <span className="news__author">{props.gennews.author}</span>
                <p className={styles.card_text_p}>{props.gennews.description}</p>
                <span className={styles.card_text_date}>{props.gennews.publishedAt}  </span>
                <span className="news__source">{props.gennews.source.name}</span>
            </div>
            <br />
            
        </div>
    )
}

export default NewsArticle
