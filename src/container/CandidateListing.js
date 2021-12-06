import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCandidates } from "../redux/actions/candidateActions";
import CandidateComponent from "./CandidateComponent";
import CandidateDetails from "./CandidateDetails";

const CandidateListing = () => {
  const dispatch = useDispatch();
  const uri = "https://sumit-back-end-env.herokuapp.com/api/v1/candidates";
  const fetchCandidateInformation = async () => {
    const response = await axios.get(uri).catch((err) => {
      console.log("err", err);
    });
    if (response.status == 200) {
      dispatch(setCandidates(response["data"]["data"]["data"]));
    } else {
      console.log("API Call status not 200");
    }
  };
  useEffect(() => {
    console.log("Active api call");
    fetchCandidateInformation();
  }, []);

  return (
    <div className="ui grid container">
      <CandidateComponent />
      <CandidateDetails />
    </div>
  );
};

export default CandidateListing;
