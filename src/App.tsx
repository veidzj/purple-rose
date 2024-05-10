import { FormEvent } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className='container'>
      <div className='form-container'>
        <img src={logo} alt='App logo, Purple rose' />
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Nome</label><br/>
          <input type='text' name='name' />

          <label htmlFor='age'>Idade</label><br/>
          <input type='number' name='age' />

          <label htmlFor='favorite-movie'>Filme/Série Favorito</label><br/>
          <input type='text' name='favorite-movie' />

          <label htmlFor='favorite-food'>Comida Favorita</label><br/>
          <input type='text' name='favorite-food' />

          <button type='submit'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default App
