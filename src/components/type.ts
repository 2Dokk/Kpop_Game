import { Dispatch, SetStateAction } from "react";
interface VideoStorage {
  title: string;
  img: string;
  viewCount: number;
}

export interface gameContentProps {
  videoInfoArray: Array<VideoStorage>;
  counter: number;
  score: number;
  setCounter: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
}
