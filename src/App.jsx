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
    let initialCredit = course.courseCredit;
    if (notUnique) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Item already exist in bookmark!'
      })
    } else {
      const totalCredit = initialCredit + TotalCredit;
      // const RemainingCreditHour = creditHour - initialCredit;
      if (totalCredit > 20) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Total credit limit exist!'
        })
      } else {
        setCourseBookmarks([...courseBookmark, course])
        setCoursePrice(coursePrice + course.coursePrice);
        setcreditHour(creditHour - course.courseCredit)
        setTotalCredit(TotalCredit + course.courseCredit);
      }
    }
  }

  return (
    <>
      <div className='container mx-auto font-family'>
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