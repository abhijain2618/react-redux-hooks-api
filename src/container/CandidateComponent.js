import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortedCandidates } from "../redux/actions/candidateActions";
import { useLocation } from "react-router";
import { SORT_BY } from "./const";

const CandidateComponent = () => {
  const [searchBy, setSearchBy] = useState("");
  const location = useLocation();
  const filterParam = new URLSearchParams(location.search).get("search");
  const dispatch = useDispatch();
  const candidates = useSelector((state) => state.candidateReducer);
  const renderList = (input) => {
    if (input)
      return input.map((candidate) => {
        const {
          id,
          name,
          email,
          birth_date,
          year_of_experience,
          position_applied,
          application_date,
          status,
        } = candidate;
        return (
          <tr>
            <td key={id} data-label="Name">
              {name}
            </td>
            <td data-label="Email">{email}</td>
            <td data-label="DOB">{birth_date}</td>
            <td data-lebel="Years of Experience">{year_of_experience}</td>
            <td data-label="Position Applied">{position_applied}</td>
            <td data-label="Application Date">{application_date}</td>
            <td data-lbel="Status">{status}</td>
          </tr>
        );
      });
  };

  const search = () => {
    if (searchBy != "") {
      return candidates.filter(
        (el) => el.name.toLowerCase().indexOf(searchBy) > -1
      );
    } else {
      return candidates;
    }
  };

  const sortBy = (type) => {
    if (type != "") {
      dispatch(sortedCandidates({ candidates: candidates, sortType: type }));
    } else {
      return candidates;
    }
  };

  return (
    <div className="ui main text container">
      <h2> Candidate Component </h2>
      <div>
        <input
          type="search"
          value={searchBy}
          onChange={(event) => setSearchBy(event.target.value.toLowerCase())}
        />
      </div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th
              onClick={() => {
                sortBy(SORT_BY.YEARS_OF_EXPERIENCE);
              }}
            >
              Years of Experience<i className="sort icon"></i>
            </th>
            <th
              onClick={() => {
                sortBy(SORT_BY.POSITION_APPLIED);
              }}
            >
              Position Applied<i className="sort icon"></i>
            </th>
            <th
              onClick={() => {
                sortBy(SORT_BY.DATE_OF_APPLICATION);
              }}
            >
              Application Date<i className="sort icon"></i>
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{renderList(search())}</tbody>
      </table>
    </div>
  );
};

export default CandidateComponent;
