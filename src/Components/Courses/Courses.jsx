import React, { useEffect, useState } from 'react'
import Course from '../Course/Course';

const Courses = ({ handleCourseName, notify }) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        handleCourseName={handleCourseName}
                    />)
                }
            </div>
        </div>
    )
}

export default Courses