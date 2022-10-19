import React, {useState} from 'react';

export const HeaderForm = () => {
  const [findPlace, setFindPlace] = useState('');

  const toFind = (input: string) => {
    setFindPlace(input);
  }

  return (
    <form 
      className='header-form header__main-info-block_form'
      action={`https://www.google.com/maps/place/${findPlace}`}
      target="_blank"
      onSubmit={() => {
        setFindPlace('');
      }}
      >
      <input 
        placeholder='Find the place to help'
        className='header-form__input'
        value={findPlace}
        onChange={(event) => {
          toFind(event.target.value);
        }}
      />
      <button
        className='header-form__btn'>
        search
      </button>
    </form>
  )
}