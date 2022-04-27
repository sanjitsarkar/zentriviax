import { createContext, useContext } from "react";
import { useApi } from "../hooks";
import { formatError } from "../utils";

const ScoreContext = createContext();
const ScoreProvider = ({ children }) => {
  const { callApi } = useApi();

  const addScore = async (points, id, inCorrectQuestionsId) => {
    try {
      const res = await callApi("put", `user/scores/${id}`, true, {
        points,
        id,
        inCorrectQuestionsId,
      });
      return res;
    } catch (err) {
      console.log(formatError(err));
    }
  };
  const fetchScoreInfo = async (id) => {
    try {
      const res = await callApi("get", `user/scores/${id}`, true);
      return res;
    } catch (err) {
      console.log(formatError(err));
    }
  };
  return (
    <ScoreContext.Provider value={{ addScore, fetchScoreInfo }}>
      {children}
    </ScoreContext.Provider>
  );
};

const useScore = () => useContext(ScoreContext);
export { useScore, ScoreProvider };