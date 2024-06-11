import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removePokemon , editPokemon} from '../actions/PokemonSlice'

const Pokemons = () => {

    const pokemons = useSelector(state => state.pokemons)
    
    const dispatch = useDispatch()

    const handleEdit = (id , currenttext) => {
      //dispatch(editPokemon({ id, newText }));
      setEditPokemonText(id)
      setText(currenttext)
    }

    const handleSave = (id) => {
      dispatch(editPokemon({ id, newText: text }));
      setEditPokemonText(null);
      setText('');
    }
    const [editPokemonText , setEditPokemonText] = useState(null)
    const [text , setText] = useState('')

  return (
    <div className='flex justify-center items-center w-full flex-col'>
        
      {pokemons.map((pokemon) => (

<li key={pokemon.id}>
{editPokemonText === pokemon.id ? (
  <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
 className='' />
) : (
  <span className=' w-56 h-9 rounded-xl'>{pokemon.text}</span>
)}
<button onClick={() => dispatch(removePokemon(pokemon.id))}
  className='m-5 bg-red-700 w-16 h-7 rounded-xl text-white'>
  X
  </button>
{editPokemonText === pokemon.id ? (
  <button onClick={() => handleSave(pokemon.id)}>Save</button>
) : (
  <button onClick={() => handleEdit(pokemon.id, pokemon.text)}
  className='m-2 bg-black w-24 h-7 rounded-xl text-white'>
    Edit
    </button>
)}
</li>
        // <li key={pokemon.id}>
        //     {pokemon.text}
        //     <button onClick={() => dispatch(removePokemon(pokemon.id))}>
        //         X
        //     </button>
        //     <button onClick={() => handleEdit(pokemon.id , 'new name')}>edit</button>
        // </li>
      ))}
    </div>
  )
}

export default Pokemons
