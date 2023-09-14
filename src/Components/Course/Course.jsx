import React from 'react'

const Course = ({ course }) => {

  const { id, image, courseName, courseCredit, courseDetails, coursePrice } = course;

  return (
    <div>
      <div className="w-80 p-2 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className='w-full h-[200px] rounded-lg' />
        </figure>
        <div className="">
          <h2 className="text-xl font-bold">{ courseName }</h2>
          <p className='text-lg font-regular'>{courseDetails? courseDetails.slice(0, 60) : "Upcoming soon!!!"}</p>
          
          <div>
            <div>$ { coursePrice? coursePrice : "Upcoming soon!!!" }</div>
          </div>

          <div className="">
            <button className="btn btn-primary w-full text-white">Select</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course