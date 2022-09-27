import React, { useState, useMemo } from "react";
import Table from "./TableContainer";
import {getAll} from '../../services/KadrService'
import {removeById} from '../../services/KadrService'
import "./Main.css";
import { useNavigate, useLocation } from "react-router-dom";

function Main() {
  const [data, setData] = useState([]);
  const [render, setRender] = useState(0);
  const count = useLocation()
  useMemo(()=>{
      getAll().then((res)=>{setData(res.data)})
  },[render, count])
  const renderFunc = () =>{
    setRender(render+1)
  }
  const navigate = useNavigate()
  const columns = [
    {
      Header: "FirstName",
      accessor: "firstName",
    },
    {
      Header: "LastName",
      accessor: "lastName",
    },
    {
      Header: "FatherName",
      accessor: "fatherName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Telegram",
      accessor: "telegram",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Actions",
      accessor:"id",
      Cell:({row})=>(
        <>
          <button   className="action bg-transparent" onClick={()=>navigate(`/modal/${row.values.id}`)} ><i class="bi bi-eye text-blue-900"></i> View</button>
          <button className="action bg-transparent" onClick={()=>navigate(`/edit/${row.values.id}`)} ><i class="bi bi-pencil text-red-900"></i> Edit</button>
          <button className="action bg-transparent" onClick={()=>{removeById(row.values.id); navigate('/info'); renderFunc()}} ><i class="bi bi-trash text-red-900"></i> Delete</button>
        </>
      )
    }
  ];

  return (
    <div className="App1">
      <h1>
        <center>Kadrlar haqida ma'lumot</center>
      </h1>
      <div className="App1">
        <Table render={renderFunc} columns={columns} data={data} />
      </div>
    </div>
  );
}

export default Main;