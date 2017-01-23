import React, { Component } from 'react';
import $ from 'jquery';

import Pokemons from '../components/list-component';

const API_BASE_URL = 'http://pokeapi.co/api/v2/';

export default class ListContainer extends Component{
  constructor() {
    super();

    this.state = {
      pokemons: [],
      currentPokemon: null,
    };

    this.getPokemon = this.getPokemon.bind(this);
  }
    getPokemon(pokemon){
      this.setState({
        currentPokemon: pokemon,
      });
    }

  componentDidMount(){
    $.get(`${API_BASE_URL}/pokemon`).then(response =>{this.setState({pokemons: response});

    })
  }

  render() {
      return <Pokemons
              currentPokemon={this.state.currentPokemon}
              pokemons={this.state.pokemons}
              selectPokemon={this.getPokemon} />
  }
}
