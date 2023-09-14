import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  const [courseBookmark, setCourseBookmarks] = useState([]);


  const handleCourseName = (course) => {
    // console.log('Select button clicked');
    const notUnique = courseBookmark.find(uniqueCourse => uniqueCourse.id === course.id);
    if (notUnique) {
      window.alert('Already exist in the book mark');
    } else {
      setCourseBookmarks([...courseBookmark, course])
    }

  }

  return (
    <>
      <div className='container mx-auto bg-red-50'>
        <Header />
        <div className='lg:flex mg:justify-center'>
          <div className='md:w-3/4'>
            <Courses handleCourseName={handleCourseName} />
          </div>
          <div className='md:1/4 py-6'>
            <Sidebar courseName={courseBookmark} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
