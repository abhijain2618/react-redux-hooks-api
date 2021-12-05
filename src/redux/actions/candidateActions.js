import { ActionTypes } from "../constants/action-types";

export const setCandidates = (candidates) => {
  return {
    type: ActionTypes.SET_CANDIDATES,
    payload: candidates
  };
};

export const sortedCandidates = (payload) => {
  return {
    type: ActionTypes.SORTED_CANDIDATES,
    payload: payload
  };
};
