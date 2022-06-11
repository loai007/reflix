import React, { Component } from "react";

class MovieDetailed extends Component {
  render() {
    return (
      <div>
        <div>{this.props.state.title}</div>
      </div>
    );
  }
}

export default MovieDetailed;
