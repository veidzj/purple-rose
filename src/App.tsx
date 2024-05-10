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

          <label htmlFor='favorite-movie'>Filme Favorito</label><br/>
          <input type='text' name='favorite-movie' />

          <label htmlFor='favorite-show'>Série Favorita</label><br/>
          <input type='text' name='favorite-show' />

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
