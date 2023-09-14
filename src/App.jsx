import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <div className='container mx-auto'>
        <Header />
        <div className='lg:flex mg:justify-center'>
          <div className='md:w-3/4'>
            <Courses />
          </div>
          <div className='md:1/4'>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
