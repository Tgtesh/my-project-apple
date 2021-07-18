import React, { useState, useEffect } from 'react';
import "../bootstrap/bootstrap.min.css"
import "./news.css"

// uthor: "Kris Holt"
// content: "WhatsApp is working on a setting that will let users more easily bypass its iffy image compression and send photos and videos in the highest available fidelity. The \"best quality\" option will likely … [+1010 chars]"
// description: "WhatsApp is working on a setting that will let users more easily bypass its iffy image compression and send photos and videos in the highest available fidelity. The \"best quality\" option will likely join \"auto\" and \"data saver\" choices in a future version of …"
// publishedAt: "2021-07-09T14:35:06Z"
// source: {id: "engadget", name: "Engadget"}
// title: "WhatsApp is adding a 'best quality' setting for sending photos and videos"
// url: "https://www.engadget.com/whatsapp-photo-video-best-quality-settings-143506690.html"
// urlToImage: "https://s.yimg.com/os/creatr-images/2019-03/c3586f80-4e6f-11e9-a6e9-46924fd2fa6c"

function News() {
    const [news, setnews] = useState([])
    useEffect(() => {
        fetch(
          "https://newsapi.org/v2/everything?q=apple&from=2021-07-01&sortBy=publishedAt&pageSize=10&apiKey=d69154077c804e019f1c44e314107389"
        )
          .then((res) => res.json())
          .then((data) => setnews(data.articles));
      
    }, [])
    console.log(news)
    return (
      <div className="allNewsWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest News
              </div>
            </div>
            {news.map((singleNews) => {
              let newsId = singleNews.source.id;
              
              let newsWrapper = (
                <div key={newsId} class="col-sm-12 col-md-6">
                  <div class="container overflow-hidden singleNewsWrapper">
                    <div class="singleWrapper">
                      <a href={singleNews.url}
                          target="_blank"
                        >
                      <div class="card" style={{ width: 550  }}>
                        
                          {" "}
                          <img
                            src={singleNews.urlToImage}
                            class="card-img-top"
                            alt="..."/>
                          <div className="card-title">{singleNews.title}</div>
                        <div class="card-body">
                          <p class="card-text">{singleNews.description}</p>
                        </div>
                    
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
              return newsWrapper;
            })}
          </div>
        </div>
      </div>
    );
}

export default News
