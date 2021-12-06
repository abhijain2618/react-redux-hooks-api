import candidateApi from "../../apis/candidate";
import { ActionTypes } from "../constants/action-types";

export const setCandidates = (candidates) => {
  return {
    type: ActionTypes.SET_CANDIDATES,
    payload: candidates,
  };
};

export const sortedCandidates = (payload) => {
  return {
    type: ActionTypes.SORTED_CANDIDATES,
    payload: payload,
  };
};

export const fetchCandidates = () => async (dispatch) => {
  const response = await candidateApi.get("/candidates");

  dispatch({
    type: ActionTypes.FETCH_CANDIDATES,
    payload: response["data"]["data"]["data"],
  });
};
