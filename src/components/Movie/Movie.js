import React, { Component } from "react";
import "./Movie.css";
import { Link } from "react-router-dom";
class Movie extends Component {
  render() {
    return (
      <span>
        <Link to={`/catalog/${this.props.movie.id}`} movie={this.props.movie}>
          <img className="image" src={this.props.movie.img} alt="" />
        </Link>
        <button
          id={this.props.movie.id}
          onClick={(e) => this.props.rentFunc(e.target.id)}
        >
          {this.props.movie.isRented ? "UnRent" : "Rent"}
        </button>
      </span>
    );
  }
}

export default Movie;
