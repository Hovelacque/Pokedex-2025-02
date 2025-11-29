import './App.css'
import PokemonContainer from './components/PokemonContainer'
import Typebar from './components/TypeBar'

function App() {

  return (
    <>
      <label>Pokedex</label>
      <Typebar />
      <PokemonContainer 
        type="fire"
      />
    </>
  )
}

export default App
