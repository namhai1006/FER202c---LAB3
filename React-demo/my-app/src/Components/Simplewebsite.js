import React, { Component } from "react";

class Simplewebsite extends Component {
  render() {
    const { title,title2,title3,title4,title5,description, imageUrl,description2, description3} = this.props;

    return (
      <div className="card">
        <div className="bth">
          <img src={imageUrl} alt={title} className="card-image" style={{backgroundColor:"orange"}} />
          <div className="card-content">
            <div className="row" >
            <h2 className="card-title">{title}</h2>
            <h3 className="card-title2">{title2}</h3>
            <h4 className="card-title3">{title3}</h4>
            </div>
            </div>
            </div>
        <div className="card-content1">
            <div className="row2">
            <h5 className="card-title4">{title4}</h5>
            <p className="card-description">{description}</p>
            <h6 className="card-title5">{title5}</h6>
            <p className="card-description2">{description2}</p>
            </div>
          </div>
          <div className="row3">
          <p className="card-description3">{description3}</p>
          </div>
        </div>
    
    );
  }
}


export { Simplewebsite};
