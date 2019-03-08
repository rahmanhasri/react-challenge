import React from 'react';

export default function DetailPokemon(props) {
  const { pokemon } = props

  function getStats() {
    let stats = pokemon.stats.map(function(stat) {
      if(!stat.stat.name.includes('special')) {
        return <li key={stat.stat.name} className="has-text-info is-size-7">{stat.stat.name + ':'  + stat.base_stat} </li>
      }
    })
    return stats
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-square">
          <img src={pokemon.sprites && pokemon.sprites.front_default} alt="pokemon" />
        </figure>
        
      </div>
      <div className="card-content">
        <div className="media-content has-text-centered">
          <p className="title is-4">{pokemon.name}</p>
        </div>
        <div className="content has-text-success">
          { pokemon.types && pokemon.types.map(type => <span key={type.type.name}>{type.type.name} </span>)}
          <ul>
          { pokemon.stats && getStats()}
          </ul>
        </div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">Favorite</p>
        <p className="card-footer-item">Back</p>
      </footer>
    </div>
  )
}


/*
    <article className="media">
      <figure className="media-left">
        <p className="image is-128x128">
          <img src={pokemon.sprites && pokemon.sprites.front_default} alt="pokemon" />
        </p>
      </figure>
    </article>
*/