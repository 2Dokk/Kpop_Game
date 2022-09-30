import { useEffect, useState } from "react";
import { v4 as uuid, v4 } from "uuid";
import Image from "next/image";
const GameContent = () => {
  const axios = require("axios");
  let [videolist, setVideolist] = useState<any[]>([]);
  let [videoInfo, setVideoInfo] = useState<any[]>([]);
  let apiKey = "AIzaSyAK6tKgQ24kcRbQ42qNJx_ijzwiPClTrm0";
  //let channelId = "UC0mJTI_l9a5Ugwo1ytAHSAA";
  let playlistID = "PLBFSFgEglN1wnhCaB3vw-gUsDkfLY9Uoi";
  let videoID: string[] = [];
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistID}&maxResults=50&key=${apiKey}`
      )
      .then((res: any) => {
        console.log(res.data.items);
        setVideolist(res.data.items);
      })
      .catch(() => {});
  }, [apiKey, axios, playlistID]);
  {
    videolist.map((x) => {
      videoID.push("&id=" + x.snippet.resourceId.videoId);
    });
  }
  let videoIDString = videoID.join("");

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics${videoIDString}&maxResults=50&key=${apiKey}`
      )
      .then((res: any) => {
        console.log(res.data.items);
        setVideoInfo(res.data.items);
      })
      .catch(() => {});
  }, [apiKey, axios, videoIDString, videolist]);
  return (
    <div>
      {videoInfo &&
        videoInfo.map((x) => {
          return (
            <div key={v4()}>
              <div className="image">
                <Image
                  src={x.snippet.thumbnails.high.url}
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
              <h2>{x.snippet.title}</h2>
              <span>{"조회수:" + Number(x.statistics?.viewCount) + "회"}</span>
            </div>
          );
        })}
    </div>
  );
};

export default GameContent;
