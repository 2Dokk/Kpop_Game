import { Dispatch, SetStateAction } from "react";
interface VideoStorage {
  title: string;
  img: string;
  viewCount: number;
}

export interface gameContentProps {
  json: Object;
}

export interface ContextInterface {
  counter: number;
  score: number;
  setCounter: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
}
