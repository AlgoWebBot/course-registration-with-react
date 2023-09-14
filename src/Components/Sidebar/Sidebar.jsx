import React from 'react'

const Sidebar = ({ courseName, coursePrice }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className="w-80 bg-base-100 shadow-xl rounded-lg">
                <div>
                    <h1 className='text-blue-500 text-xl font-bold p-4'>Credit Hour Remaining 20 hr</h1>
                </div>
                <hr />
                <div className='p-4'>
                    <h1 className='text-black text-xl font-bold'>Course Name </h1>
                    {
                        courseName.map((course, index) => <h1 className='text-base font-regular text-black my-2'>0{index + 1}. {course.courseName}</h1>)
                    }

                </div>
                <hr />
                <div>
                    <h1 className='text-black text-xl font-regular p-4'>Total Credit Hour: 10</h1>
                </div>
                <hr />
                <div>
                    <h1 className='text-black text-xl font-regular p-4'>Total Price: { coursePrice }$</h1>
                </div>
            </div>
        </div>
    )
}

export default Sidebar