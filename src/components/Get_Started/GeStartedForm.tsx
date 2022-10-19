import React, {useState} from 'react';

type Props = {
  handleSubmit: (name: string, email: string) => void;
}

export const GetStartedForm: React.FC <Props> = ({handleSubmit}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <form 
      className="form get-started__form-block_form"
      onSubmit={(event) => {
        event.preventDefault()
        handleSubmit(name, email);
        setName('');
        setEmail('');
      }}
      >
      <input 
        className="form__input" 
        placeholder="Name"
        type='text'
        required
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input 
        className="form__input" 
        placeholder="Email"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        type='email'
      />
      <button className="form__button">
        Book a demo
      </button>
    </form>
  )
}