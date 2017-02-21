import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';
import { bindActionCreators } from 'redux';

class MoviesNew extends Component {

  // constructor() {
  //   super();
  //
  //   this.state = {
  //     title: ''
  //   };
  // }


  handleSubmit(e){
    e.preventDefault();
    const movie = {
      title: this.refs.movieTitle.value
    }
    this.props.addMovie(movie);
    this.refs.movieTitle.value = "";
    browserHistory.push('/movies');
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <input type="text" ref="movieTitle" placeholder="Add a Movie" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    addMovie: bindActionCreators(addMovie, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(MoviesNew)
