import { useEffect, useState } from "react";
import GameContent from "./gameContent";
//types
import { gameContentProps } from "./type";

const GamePage = () => {
  const axios = require("axios");
  let [videolist, setVideolist] = useState<any[]>([]);
  let [videoInfo, setVideoInfo] = useState<any[]>([]);

  //set apiKey
  let apiKey = process.env.NEXT_PUBLIC_API_KEY;
  //let channelId = "UC0mJTI_l9a5Ugwo1ytAHSAA";
  //set playList ID
  let playlistID = "PLODMrfwE__J41rFco3nOsCRZm62qETZ_O";
  let videoID: string[] = [];

  //Youtube Api
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
    console.log(videoIDString);
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

  //재생목록 속 동영상을 배열에 저장
  interface VideoStorage {
    title: string;
    img: string;
    viewCount: number;
  }
  class VideoStorage implements VideoStorage {
    constructor(title: string, img: string, viewCount: number) {
      this.title = title;
      this.img = img;
      this.viewCount = viewCount;
    }
  }
  const videoArray: Array<VideoStorage> = [];
  videoInfo.map((x) => {
    videoArray.push(
      new VideoStorage(
        x.snippet.title,
        x.snippet.thumbnails.high.url,
        Number(x.statistics?.viewCount)
      )
    );
  });

  const props: gameContentProps = {
    videoInfoArray: videoArray,
  };

  return (
    <div>
      <GameContent props={props} />
    </div>
  );
};

export default GamePage;
