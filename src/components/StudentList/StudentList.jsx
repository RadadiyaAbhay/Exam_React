import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, getSingleStudent, getStudent } from '../../services/actions/student.action';
import { useNavigate } from 'react-router';

const StudentList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getStudent())
  },[])
  const handleEdit = (id) =>{
    dispatch(getSingleStudent(id))
    navigate( '/update')
  }
  const handleDelete = (id) =>{
    dispatch(deleteStudent(id));
  }
  let {students} = useSelector(state => state.studentReducer);
  
  return (
    <>
      <section className='px-28 py-20 w-full'>
        <table className='border-2 w-full'>
          <thead>
            <tr >
              <th className='px-3 py-2 border-4 w-1/12'>No.</th>
              <th className='px-3 py-2 border-4 w-3/12'>Name</th>
              <th className='px-3 py-2 border-4 w-2/12'>Roll No.</th>
              <th className='px-3 py-2 border-4 w-2/12'>Course</th>
              <th className='px-3 py-2 border-4 w-2/12'>Email</th>
              <th className='px-3 py-2 border-4 w-2/12'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((stu , index) => {
                return (
                  <tr key={index}>
                    <td className='px-3 py-2 border w-1/12'>{index +1}</td>
                    <td className='px-3 py-2 border w-3/12'>{stu.fname + " " +stu.lname}</td>
                    <td className='px-3 py-2 border w-2/12'>{stu.rollNo}</td>
                    <td className='px-3 py-2 border w-2/12'>{stu.course}</td>
                    <td className='px-3 py-2 border w-2/12'>{stu.email}</td>
                    <td className='px-3 py-2 border w-2/12'><button className='bg-rose-900 px-5 py-2 rounded-xl text-white font-bold' onClick={() =>{ handleDelete(stu.id)}}>Delete</button> <button className='bg-amber-900 px-5 py-2 rounded-xl text-white font-bold' onClick={() =>{ handleEdit(stu.id)}} >Edit</button></td>
                  </tr>

                )
              })
            }
          </tbody>
        </table>
      </section>
    </>
  )
}

export default StudentList