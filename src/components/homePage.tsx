import Button from "react-bootstrap/Button";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Link href={`/stage/${1}`}>
        <div id="startButton">
          <Button variant="warning" size="lg">
            시작하기
          </Button>{" "}
        </div>
      </Link>
    </>
  );
};

export default HomePage;
