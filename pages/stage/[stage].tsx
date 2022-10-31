/* eslint-disable react-hooks/rules-of-hooks */
import Axios from "axios";
import { GetStaticProps, NextPage } from "next";
import GameContent from "../../src/components/gameContent";
import { gameContentProps } from "../../src/components/type";

const Stage: NextPage = (data) => {
  return (
    <>
      <GameContent props={data} />
    </>
  );
};

export default Stage;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { stage: "1" } },
      { params: { stage: "2" } },
      { params: { stage: "3" } },
    ],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async () => {
  //재생목록 속 동영상을 배열에 저장
  const videoArray: (string | number)[][] = [];
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const playlistID = "PLODMrfwE__J41rFco3nOsCRZm62qETZ_O";
  let videoInfo;
  let videolist = [];
  let videoID: any[] = [];
  let videoIDString;
  await Axios.get(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistID}&maxResults=50&key=${apiKey}`
  ).then((res: any) => {
    videolist = res.data.items;
    let counter: number = 0;
    videolist.map((x: { snippet: { resourceId: { videoId: string } } }) => {
      if (counter++ < 2) {
        videoID.push("&id=" + x.snippet?.resourceId.videoId);
      }
    });
    videoIDString = videoID.join("");
  });
  await Axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics${videoIDString}&maxResults=50&key=${apiKey}`
  ).then((res: any) => {
    videoInfo = res.data.items;
    videoInfo.map(
      (x: {
        snippet: { title: string; thumbnails: { high: { url: string } } };
        statistics: { viewCount: any };
      }) => {
        return videoArray.push([
          x.snippet?.title,
          x.snippet?.thumbnails.high.url,
          Number(x.statistics?.viewCount),
        ]);
      }
    );
  });
  let data = JSON.stringify(videoArray);
  console.log(data);
  console.log(typeof data);
  return {
    props: {
      data,
    },
  };
};
