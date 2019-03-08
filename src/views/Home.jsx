import React, { Component } from 'react';
import axios from 'axios';

// Components
import Single from '../components/Single';
import Loading from '../components/Loading';

// connect
import { connect } from 'react-redux';

// actions
import { getPokemons } from '../store/actions/apiActions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchRandom()
  }

  render() {
    const { pokemons, loading } = this.props;
    if(loading) {
      return (
        <Loading />
      )
    } else {
      return (
        <div className="container">
          <div className="columns is-multiline is-mobile">
            {pokemons.map((char, index) => <Single key={index} char={char} ></Single>)}
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = function(state) {
  return {
    pokemons: state.pokemon.randomPokemon,
    loading: state.pokemon.loading,
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchRandom: () => dispatch(getPokemons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);