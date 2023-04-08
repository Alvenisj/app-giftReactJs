import { useState } from "react"



export const AddCattegory = ( { onNewCategory }) => {

const [inputValue, setInputValue] = useState('');

const handleInput = ({ target }) => {
    setInputValue(target.value);
}

const onSubmit = (e) => {
     e.preventDefault();
     
     if ( inputValue.trim().length <= 1 ) return;

     //setCategories( categories => [ inputValue, ...categories ]);
     setInputValue('');
     onNewCategory( inputValue.trim() );
}

  return (
    <form onSubmit={ onSubmit }>

    <input 
          type="text"
          placeholder="Buscar Gifs"
          value={ inputValue }
          onChange={ handleInput }
      />

    </form>
    
     

  )



}
