import Header from "./container/Header";
import "./styles.css";
import { BrowserRouter, Routes ,  Route } from "react-router-dom";
import CandidateListing from "./container/CandidateListing";

export default function App() {
  return (
    <div className="ui grid container">
      <Header />
        
        <Routes>
          <Route path="/"  element={<CandidateListing/>} />

          <Route>404 Not Found!</Route>
        </Routes>
      

      <hr/>
    </div>
  );
}
