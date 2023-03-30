export default  function PokemonList ({pokedex}) {

const pokemons = pokedex.map(x =>
  <li key={x.number}>{x.name}</li>
  );

  return <ul>{pokemons}</ul>
}
