
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-500 text-black p-2 rounded-lg'>
        Tailwind Bootstrap And Props Test
      </h1>
      <div className="container">
        <div className="row">
          <Card title="SomeThing" btntext="Visit me"/>
          <Card />
          <Card />
        </div>
      </div>
      
  
    </>
  )
}

export default App