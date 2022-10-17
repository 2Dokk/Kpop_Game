import React from "react";
import { useState } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
let [score, setScore] = useState(0);
export const Score = React.createContext({
  score: score,
  setScore: setScore,
});
