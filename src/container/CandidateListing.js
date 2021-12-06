import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCandidates } from "../redux/actions/candidateActions";
import CandidateComponent from "./CandidateComponent";
import CandidateDetails from "./CandidateDetails";

const CandidateListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Active api call");
    //console.log("InActive api call");
    dispatch(fetchCandidates());
  }, []);

  return (
    <div className="ui grid container">
      <CandidateComponent />
      <CandidateDetails />
    </div>
  );
};

export default CandidateListing;
