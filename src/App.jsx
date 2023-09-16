import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [courseBookmark, setCourseBookmarks] = useState([]);
  const [coursePrice, setCoursePrice] = useState(0);
  const [creditHour, setcreditHour] = useState(20);
  const [TotalCredit, setTotalCredit] = useState(0);

  const notify = (msg) => toast.warn(msg, {
    position: "top-center",
    autoClose: 1000,
    transition: Zoom,
    theme: "light",
  });

  const handleCourseName = (course) => {
    const notUnique = courseBookmark.find(uniqueCourse => uniqueCourse.id === course.id);
    let initialCredit = course.courseCredit;
    if (notUnique) {
      notify("Card already exist in queue!");
    } else {
      const totalCredit = initialCredit + TotalCredit;
      if (totalCredit > 20) {
        notify("Course credit limit exceed!");
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
      <div>
        {/* <button onClick={}>Notify!</button> */}
        <ToastContainer />
      </div>
    </>
  )
}

export default App