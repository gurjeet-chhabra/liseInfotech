import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addPokemon , removePokemon} from '../actions/PokemonSlice'

const AddPokemon = () => {

  const [input , setInput] = useState('')

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(addPokemon(input))
      setInput('')
  }

  return (
    <div className='flex justify-center items-center w-full'>

      <form onSubmit={handleSubmit} className='m-10 flex justify-center items-center'>

        <input placeholder='add pokemon' value={input} onChange={(e) => setInput(e.target.value)}
        className='m-5 w-64 h-9 rounded-lg'/>

        <button onSubmit={handleSubmit} className=' justify-center items-center bg-black text-white
         h-10 w-24  rounded-xl'>
          add
          </button>
        
          </form>
      
    </div>
  )
}

export default AddPokemon
