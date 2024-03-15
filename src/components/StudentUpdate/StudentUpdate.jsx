import React, { useState } from 'react'
import { addStudent, updateStudent } from '../../services/actions/student.action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

const StudentUpdate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector(state => state.studentReducer);


    const [student , setStudent] = useState(data.student)
    

    const hanleInput = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(updateStudent(student));
        
        navigate("/")
    }
    return (
        <>
            <section className='px-28 py-20'>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base text-2xl font-semibold leading-7 text-gray-900">Student Information</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="fname"
                                        id="fname"
                                        value={student?.fname}
                                        onChange={hanleInput}
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="lname"
                                        id="lname"
                                        value={student?.lname}
                                        onChange={hanleInput}
                                        autoComplete="family-name"
                                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={student?.email}
                                        onChange={hanleInput}
                                        autoComplete="email"
                                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-900">
                                    Course Name
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="course"
                                        name="course"
                                        value={student?.course}
                                        onChange={hanleInput}
                                        autoComplete="course-name"
                                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option value={"-1"}>---Select Course---</option>
                                        <option value={"FullStack Development"}>FullStack Development</option>
                                        <option value={'UI/UX Development'}>UI/UX Development</option>
                                        <option value={'Frontend Development'}>Frontend Development</option>
                                        <option value={'Backend Development'}>Backend Development</option>
                                        <option value={'Flutter Development'}>Flutter Development</option>
                                    </select>
                                </div>
                            </div>



                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="rollNo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Roll Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="rollNo"
                                        id="rollNo"
                                        value={student?.rollNo}
                                        onChange={hanleInput}
                                        autoComplete="rollNo"
                                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    Age
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="age"
                                        id="age"
                                        value={student?.age}
                                        onChange={hanleInput}
                                        autoComplete="age"
                                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="facultyName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Faculty Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="facultyName"
                                        id="facultyName"
                                        value={student?.facultyName}
                                        onChange={hanleInput}
                                        autoComplete="facultyName"
                                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">

                                <div className="mt-2">
                                    <button type='submit' className='shadow-md rounded-xl px-5 py-2 font-bold text-white bg-gray-900'>Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default StudentUpdate