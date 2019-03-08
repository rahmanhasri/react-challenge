import React from 'react';
import { Link } from 'react-router-dom';

export default function Single(props) {
  const { char } = props

  function getId() {
    return char.url.slice(0, char.url.length-1).split('/')[6]
  }

  return (
    <div className="column is-12-mobile is-half-tablet is-2-desktop">
      <div className="card">
      <div className="card-image">
        <figure className="image is-square">
          <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${getId()}.png`} alt="pokemon" />
        </figure>
        
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-5 has-text-centered">
            <Link to={`/pokemon/${getId()}`}>
              {char.name}
            </Link>
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}