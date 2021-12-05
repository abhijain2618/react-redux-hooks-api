import { ActionTypes } from "../constants/action-types";
const initialState = [];


const sortedCandidates = (payload)=> {
  console.log('payload' , payload);
  const {candidates , sortType} = payload;
  console.log('candidates ', candidates);
  console.log('sort type ', sortType);
  const sortedData = [...candidates];
  sortedData.sort((lhs , rhs ) => {
    if(lhs[sortType] < rhs[sortType] ) return -1;
    if(lhs[sortType] > rhs[sortType]) return 1;
    return 0;
  
  })
  return sortedData;
};

export const candidateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CANDIDATES:
      console.log("paylod");            
      return [...state, ...payload];
    case ActionTypes.SORTED_CANDIDATES:
      return sortedCandidates(payload);
    default:
      return state;
  }
};
