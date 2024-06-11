import { useState } from 'react'
import './App.css'
import AddPokemon from './Components/AddPokemon'
import Pokemons from './Components/Pokemons'

function App() {
  return (
  <div className='flex justify-center items-center flex-col bg-amber-200 h-screen w-full'>
    <text className=' font-extrabold text-black text-3xl'>track all your pokemons here easily</text>
  <AddPokemon/>
  <Pokemons/>
  </div>
  )
}

export default App
