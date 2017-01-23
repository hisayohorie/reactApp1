import React, { PropTypes } from 'react';

export default function Pokemon(props) {
  return <div onClick={ props.selectPokemon}>{props.name}</div>
}

Pokemon.propTypes ={
  name: PropTypes.string.isRequired,
};
