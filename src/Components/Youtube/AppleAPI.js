import React, { useState, useEffect } from "react";
import "./AppleAPI.css";

function AppleAPI() {
    const [videos, setVideo] = useState([]);
    useEffect(() => {
        fetch(
          "https://www.googleapis.com/youtube/v3/search?key=AIzaSyA24uEIcllrdnyo6bIyAvkDh1hyK42OGrY&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=4"
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data.items);
              setVideo(data.items)
          });
    }, [])
    console.log(videos)

    return (
         <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {videos.map((singleVideo) => {
              let vidId  = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={vidId} className="col-sm-12 col-md-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                  </div>
                  
                   
              );
              return videoWrapper;
            })}

            {/* {videoWrapper} */}
          </div>
        </div>
      </div>
    );
    
}
export default AppleAPI;