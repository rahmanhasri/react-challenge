import React, {Component} from 'react';
import axios from 'axios';
import DetailPokemon from '../components/DetailPokemon';

export default class Detail extends Component {
  state = {
    pokemon: {},
  }

  componentDidMount() {
    this.getDetail(this.props.match.params.id)
  }

  getDetail = (id) => {
    axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon/${id}`
    })
      .then(({ data }) => {
        this.setState({
          pokemon: data
        })
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }

  render() {
    const { pokemon } = this.state
    // console.log(pokemon);
    return (
      <div className="columns is-centered">
        <div className="column is-3">
          <DetailPokemon key={this.props.match.params.id} pokemon={pokemon}/>
        </div>
      </div>
    )
  }
}
