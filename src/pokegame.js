import React, { Component } from 'react';
import Pokedex from './pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'ghost', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
            {id: 28, name: 'Sandslash', type: 'ground', base_experience: 95},
            {id: 34, name: 'Nidoking', type: 'poison', base_experience: 190},
            {id: 38, name: 'Ninetails', type: 'fire', base_experience: 145},
            {id: 45, name: 'Vileplume', type: 'grass', base_experience: 180},
            {id: 17, name: 'Pidgeotto', type: 'flying', base_experience: 40},
            {id: 87, name: 'Dewgong', type: 'water', base_experience: 170},
            {id: 96, name: 'Drowzee', type: 'psychic', base_experience: 65},
            {id: 98, name: 'Krabby', type: 'water', base_experience: 75},
            {id: 104, name: 'Cubone', type: 'ground', base_experience: 100},
          ]
    };
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while(hand1.length < hand2.length){
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        )
    }
}

export default Pokegame;