import Link from "next/link";
import Image from "next/image";
import type { gameContentProps } from "./type";
import { randomUUID } from "crypto";

const GameContent = ({ props }: { props: gameContentProps }) => {
  function rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const firstMV: number = rand(0, props.videoInfoArray.length);
  const secondMV: number = rand(0, props.videoInfoArray.length);
  return (
    <div>
      <div className="background">
        <div className="overlay">
          <Link href={`/stage/${props.counter}`}>
            <a>
              {props.videoInfoArray[firstMV]?.img && (
                <Image
                  src={props?.videoInfoArray[firstMV]?.img}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="image"
                  priority
                  onClick={() => {
                    props.setCounter(props.counter++);
                  }}
                />
              )}
            </a>
          </Link>
          <div className="text">{props?.videoInfoArray[firstMV]?.title}</div>
          <h3 className="text" id="UpViewCount">
            {props?.videoInfoArray[firstMV]?.viewCount} 회
          </h3>
        </div>
      </div>
      <div className="background">
        <div className="overlay">
          <Link href={`/stage/${props.counter}`}>
            <a>
              {props.videoInfoArray[secondMV]?.img && (
                <Image
                  src={props?.videoInfoArray[2]?.img}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="image"
                  priority
                  onClick={() => {
                    props.setCounter(props.counter++);
                  }}
                />
              )}
            </a>
          </Link>
          <div className="text">{props?.videoInfoArray[secondMV]?.title}</div>
          <h3 className="text" id="DownViewCount">
            {props?.videoInfoArray[secondMV]?.viewCount} 회
          </h3>
          <div className="text" id="Score">
            {props.score}점
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameContent;
