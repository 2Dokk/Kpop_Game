import Link from "next/link";
import Image from "next/image";
import type { gameContentProps } from "./type";

const GameContent = ({ props }: { props: gameContentProps }) => {
  return (
    <div>
      <div className="background">
        <div className="overlay">
          <Link href={`/stage/${props.counter}`}>
            <a>
              {props.videoInfoArray[1]?.img && (
                <Image
                  src={props?.videoInfoArray[1]?.img}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="image"
                  priority
                />
              )}
            </a>
          </Link>
          <div className="text">{props?.videoInfoArray[1]?.title}</div>
          <h3 className="text" id="UpViewCount">
            {props?.videoInfoArray[1]?.viewCount} 회
          </h3>
        </div>
      </div>
      <div className="background">
        <div className="overlay">
          <Link href={`/stage/${props.counter}`}>
            <a>
              {props.videoInfoArray[2]?.img && (
                <Image
                  src={props?.videoInfoArray[2]?.img}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="image"
                  priority
                />
              )}
            </a>
          </Link>
          <div className="text">{props?.videoInfoArray[2]?.title}</div>
          <h3 className="text" id="DownViewCount">
            {props?.videoInfoArray[2]?.viewCount} 회
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GameContent;
