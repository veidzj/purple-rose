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

          <label htmlFor='height'>Altura (em cm)</label><br/>
          <input type='number' name='height' />

          <label htmlFor='favorite-color'>Cor favorita</label><br/>
          <input type='text' name='favorite-color' />

          <label htmlFor='favorite-movie'>Filme/Série Favorito</label><br/>
          <input type='text' name='favorite-movie' />

          <label htmlFor='favorite-foods'>Comida/s Favorita</label><br/>
          <input type='text' name='favorite-foods' />

          <label htmlFor='favorite-music-genres'>Gênero/s de música favorito</label><br/>
          <input type='text' name='favorite-music-genres' />

          <label htmlFor='favorite-place'>Lugar favorito</label><br/>
          <input type='text' name='favorite-place' />

          <label htmlFor='place-to-travel'>Lugar que sonha em viajar</label><br/>
          <input type='text' name='place-to-travel' />

          <button type='submit'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default App
