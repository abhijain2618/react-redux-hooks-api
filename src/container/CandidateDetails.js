import { setCandidates } from "../redux/actions/candidateActions";
import { data } from "./jsonData";
import { useDispatch } from "react-redux";

const CandidateDetails = () => {
  const dispatch = useDispatch();

  const addData = () => {
    dispatch(setCandidates(data));
  };

  return (
    // for handling processing and reducing api calls so created this.
    <div>
      <h2> Candidate Details - For Fetching data </h2>
      <input
        type="button"
        value="Add Sample DATA!"
        onClick={(event) => {
          addData();
          console.log(event);
        }}
      />
    </div>
  );
};

export default CandidateDetails;
