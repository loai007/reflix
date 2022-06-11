import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import "./Landing.css";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      users: {
        user1: { name: "Loai", color: "red" },
        user2: { name: "Sonbol", color: "yellow" },
        user3: { name: "Snabel", color: "blue" },
        user4: { name: "SomeOne", color: "black" },
      },
    };
  }
  render() {
    return (
      <div>
        <h1 id="home-title">HOW'S WATCHING ?</h1>
        <div id="home-container">
          <div>
            <Link to="/catalog">
              <Profile
                profileName={this.state.users.user1.name}
                color={this.state.users.user1.color}
              />
            </Link>
          </div>
          <div>
            <Link to="/catalog">
              <Profile
                profileName={this.state.users.user2.name}
                color={this.state.users.user2.color}
              />
            </Link>
          </div>
          <div>
            <Link to="/catalog">
              <Profile
                profileName={this.state.users.user3.name}
                color={this.state.users.user3.color}
              />
            </Link>
          </div>
          <div>
            <Link to="/catalog">
              <Profile
                profileName={this.state.users.user4.name}
                color={this.state.users.user4.color}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
