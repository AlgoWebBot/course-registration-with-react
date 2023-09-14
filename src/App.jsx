import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Swal from 'sweetalert2'

function App() {

  const [courseBookmark, setCourseBookmarks] = useState([]);
  const [coursePrice, setCoursePrice] = useState(0);
  const [creditHour, setcreditHour] = useState(20);
  const [TotalCredit, setTotalCredit] = useState(0);


  const handleCourseName = (course) => {
    const notUnique = courseBookmark.find(uniqueCourse => uniqueCourse.id === course.id);
    if (notUnique) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Item already exist in bookmark!'
      })
    } else if (!notUnique && creditHour >= 3 && TotalCredit <= 18) {
      setCourseBookmarks([...courseBookmark, course])
      setCoursePrice(coursePrice + course.coursePrice);
      setcreditHour(creditHour - course.courseCredit)
      setTotalCredit(TotalCredit + course.courseCredit);
    } else if (creditHour <= 3) {
      setcreditHour(0);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credit hour must be greather then 0!'
      })
    } else if (TotalCredit >= 18) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credit hour must be greather then 0!'
      })
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
            <Sidebar
              courseName={courseBookmark} 
              coursePrice={coursePrice}
              TotalCredit={TotalCredit}
              creditHour={creditHour}
              />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
