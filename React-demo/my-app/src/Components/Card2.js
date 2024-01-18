import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Image/FPTUCT.png";

const Card2 = () => {
  return (
    <div className="card mb-3" style={{ border: "solid 2px blue"}}>
      <div className="row g-0 ml-1 mr-1">
        <div className="col-md-4 mt-1 mb-1 pr-0 ">
          <img
            src={logo}  
            className="img-fluid"
            alt="logo"
            style={{ border: "solid 2px #FF3C0", height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8" style={{ padding:"0"}}>
          <div className="card-body" style={{padding:"0"}}>
            <div className='row'style={{paddingLeft:"20px", paddingRight:"20px", paddingTop:"5px", paddingBottom:"5px"}} >
              <h2 className="card-title text-center col-12" style={{ fontSize: "30px", paddingTop: "6px", border: "solid 2px orange", margin: "0", padding:"0",paddingRight:"470px", color:"orange"}}>
                FPT University
              </h2>
          
              <p className="card-text col-12 mt-1" style={{ fontSize: "18px", margin: "0", border: "solid 2px gray", paddingBottom:"280px",paddingRight:"450px",color:"gray"}}>
                The description goes here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
