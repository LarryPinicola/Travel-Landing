import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p className="">{this.props.text}</p>
        </div>

        <div className="image">
          <img src={this.props.imgOne} alt="img" className="" />
          <img src={this.props.imgTwo} alt="img" className="" />
        </div>
      </div>
    );
  }
}

export default DestinationData;
