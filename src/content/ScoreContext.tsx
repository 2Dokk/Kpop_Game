/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState } from "react";
import { ContextInterface } from "../components/type";

let [counter, setCounter] = useState(1);
let [score, setScore] = useState(0);

const contextValue: ContextInterface = {
  counter: counter,
  setCounter: setCounter,
  score: score,
  setScore: setScore,
};

export const ScoreContext = createContext<ContextInterface>(contextValue);
