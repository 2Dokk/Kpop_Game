import Button from "react-bootstrap/Button";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Link href={"/"}>
        <div id="MainButton">
          <Button variant="warning" size="lg">
            메인으로
          </Button>{" "}
        </div>
      </Link>
    </>
  );
};

export default HomePage;
