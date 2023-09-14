import React from 'react'

const Course = ({ course, handleCourseName }) => {

  const { id, image, courseName, courseCredit, courseDetails, coursePrice } = course;

  return (
    <div>
      <div className="w-80 p-2 bg-base-100 shadow-xl space-y-2 rounded-lg">
        <figure>
          <img src={image} alt="Shoes" className='w-full h-[200px] rounded-lg' />
        </figure>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">{ courseName }</h2>
          <p className='text-lg font-regular'>{courseDetails? courseDetails.slice(0, 60) : "Upcoming soon!!!"}</p>
          
          <div className='flex justify-between items-center'>
            <p className='text-xl'>Price: {coursePrice ? coursePrice : "Upcoming soon!!!"}$</p>
            <p className='text-xl'>Credit: {courseCredit ? courseCredit : "Upcoming soon!!!"}hr</p>
          </div>

          <div className="mt-2">
            <button onClick={ () => handleCourseName(course)} className="btn btn-primary w-full text-white mt-2">Select</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course