import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {getById} from '../services/KadrService'
import './Modal.css'
const Modal = () => {
  const [data, setData] = useState([])
  const {id}=useParams()
  useEffect(()=>{getById(id).then((result)=>setData(result.data)) },[id])
  return (
    <div className="flex justify-center flex-col px-2 ">
      <Link to="/info" className="flex w-24 p-1 rounded no-underline my-2 bg-black px-2 text-white" > Orqaga</Link>
      <table className=''>
        <thead>
          <tr className="bg-green-100">
            <th className="text-blue-900">Name</th>
            <th className="text-blue-900">Info</th>
          </tr>
        </thead>
        <tbody>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">FirstName</td>
              <td>{data.firstName}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">LastName</td>
              <td>{data.lastName}</td>
            </tr>
            {/*  */}
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">FatherName</td>
              <td>{data.fatherName}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">BirthYear</td>
              <td>{data.birthYear}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">BirthMonth</td>
              <td>{data.birthMonth}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">BirthDay</td>
              <td>{data.birthDay}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">BirthCountry</td>
              <td>{data.birthCountry}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">BirthProvince</td>
              <td>{data.birthProvince}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">BirthCityDistrict</td>
              <td>{data.birthCityDistrict}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">Gender</td>
              <td>{data.gender}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">Citizenship</td>
              <td>{data.citizenship}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">Married</td>
              <td>{data.married}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">Partisanship</td>
              <td>{data.partisanship}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">LevelKnowledge</td>
              <td>{data.levelKnowledge}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">Seniority</td>
              <td>{data.seniority}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">Salary</td>
              <td>{data.salary}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">Email</td>
              <td>{data.email}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">Telegram</td>
              <td>{data.telegram}</td>
            </tr>
            <tr className="hover:bg-yellow-100">
              <td className="font-bold">Phone</td>
              <td>{data.phone}</td>
            </tr>
        </tbody>
      </table> 
    </div>
  )
}

export default Modal