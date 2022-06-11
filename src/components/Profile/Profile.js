import React, { Component } from "react";
import "./Profile.css";
class Profile extends Component {
  render() {
    return (
      <span>
        <h2 className="profile">{this.props.profileName}</h2>
      </span>
    );
  }
}

export default Profile;
