import './App.css'
import logo from './assets/logo.png'

function App() {
  return (
    <div className='container'>
      <div className='form-container'>
        <img src={logo} alt='App logo, Purple rose' />
        <form className='form'>
          <label htmlFor='name'>Name</label><br/>
          <input type='text' name='name' />
        </form>
      </div>
    </div>
  )
}

export default App
