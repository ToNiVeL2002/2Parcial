import './App.css'
import { Card } from './components/Card'
import './App.css'
import cosas from './assets/cosas.json'

function App() {

  return (
    <div className='app-container'>
      {
        cosas.map((cosas)=>{
          return <Card name={cosas.name} key={cosas.id} descripcio={cosas.descripcion} price={cosas.price}/>
      })
      }

      <Card/>

      <Card/>

      <Card/>

    </div>
  )
}

export default App
