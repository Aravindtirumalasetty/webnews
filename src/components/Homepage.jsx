import React, { useState, useEffect } from "react";
import styles from "../components/Homepage.module.css";
import axios from "axios";
const Homepage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=680fdb2b7b284742ae6299b7054b7db3"
      )
      .then((res) => {
        console.log(res);
        setNews(res.data.articles);
      }).catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className={`${styles.header}`}>
        <h1>Hi! Aravind! here is your brief</h1>
      </div>
      <div className={`${styles.newscontainer}`}>
        <div className={`${styles.display}`}>
          {news.map((newstopic, index) => {
            const { title, url, urlToImage, description } = newstopic;
            return (
              <>
                <article key={index} className={`${styles.eacharticle}`}>
                  <div className={`${styles.picture}`}>
                    {urlToImage ? (
                      <img src={urlToImage} alt="Dynamic" />
                    ) : (
                      <img src="/images/noimage.png" alt="Default" />
                    )}
                  </div>
                  <div className={`${styles.details}`}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a
                      href={url}
                      className={`${styles.view}`}
                    
                      rel="noopener"
                    >
                      View More
                    </a>
                  </div>
                </article>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Homepage;
