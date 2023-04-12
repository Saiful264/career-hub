import './App.css'
import Header from './componets/Header'
import Footer from './componets/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <div className='md:min-h-[calc(100vh-641px)]'>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}
  
export default App
