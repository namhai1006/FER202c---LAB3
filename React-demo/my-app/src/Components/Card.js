import React, { Component } from "react";

class Card extends Component {
  render() {
    const { title, description, imageUrl } = this.props;

    return (
      <div className="card">
        <div className="Row">
          <img src={imageUrl} alt={title} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const ExtensionComponent = () => {
  return (
    <div id="extensions" className="extensions">
      <div className="extensions ">
        <div className="extensions  icon">icon</div>
        <div className="extensions  details">
          <div className="extensions row name">Name: Some Name</div>
          <div className="extensions row desc" style={{}}>
            Description: Some description blah blah blah.
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card, ExtensionComponent };
