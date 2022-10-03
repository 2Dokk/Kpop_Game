import Link from "next/link";
import Image from "next/image";
import type { gameContentProps } from "./type";

const GameContent = ({ props }: { props: gameContentProps }) => {
  return (
    <div>
      <div className="background">
        <div className="overlay">
          <Link href={"/stage/1"}>
            <a>
              {props.videoInfoArray[1]?.img && (
                <Image
                  src={props?.videoInfoArray[1]?.img}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="image"
                />
              )}
            </a>
          </Link>
          <h3 className="text">{props?.videoInfoArray[1]?.title}</h3>
        </div>
      </div>
      <Link href={"/stage/2"}>2</Link>
    </div>
  );
};

export default GameContent;
