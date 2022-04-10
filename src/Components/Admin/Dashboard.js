import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 m-2 bg-light px-3 pt-3">
          <Link to="/updateMobiles">
            {" "}
            <h5>Phones Updated</h5>
            <h3>1044</h3>
            <p>out of 10455 data feed.</p>
          </Link>
          <h5>Users Registered</h5>
          <h3>15450</h3>
        </div>
        <div className="col m-2">
          <div className="row  bg-light">
            <div className="col m-2">
              <h3>Sales Figures</h3>
            </div>
          </div>

          <div className="row my-2">
            <div className="col mr-2 bg-light">aaaa</div>
            <div className="col mx-2 bg-light">bbbb</div>
            <div className="col ml-2 bg-light">cccc</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
