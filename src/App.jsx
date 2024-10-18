import { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
// import Calculate from './Components/Calculate/Calculate'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      {/* <Calculate/> */}
      <Footer/>
    </>
  )
}

export default App
