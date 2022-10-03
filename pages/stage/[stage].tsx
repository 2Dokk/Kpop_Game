import { NextPage } from "next";
import { useRouter } from "next/router";

const Stage: NextPage = () => {
  const router = useRouter();
  const { stage } = router.query;
  return <div>{stage}번째 페이지</div>;
};

export default Stage;
