import "./App.css";
import Deals from "./Components/Deals";
import Endtime from "./Components/Endtime";
import Offers from "./Components/Offers";

function App() {
  return (
    <div className="card text-center">
      <div className="card-body row"> 
          <div className="col-md-6">
            <Deals />
          </div>
          <div className="col-md-6">
            <Endtime />
          </div>
      </div>
      <div className="card-footer text-muted">
        <Offers />
      </div>

      {/* <div className="d-flex justify-content-between">
        
      </div> */}
    </div>
  );
}

export default App;
