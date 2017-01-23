import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PokemonContainer extends Component {
  render(){
    return (
      <div>
        <Link to='/pokemons'>
          Pokemons
        </Link>
        <Link to='/'>
          Home
        </Link>
        {this.props.children}
      </div>
    );
  }
}
