import {React,useEffect,useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { getById,update } from "../services/KadrService";

export default function RegistrationForm() {
    const {id} = useParams()
    useEffect(()=>{
        getById(id).then((result)=>{
            setValue("firstName", result.data.firstName)
            setValue("lastName", result.data.lastName)
            setValue("fatherName", result.data.fatherName)
            setValue("birthYear", result.data.birthYear)
            setValue("birthMonth", result.data.birthMonth)
            setValue("birthDay", result.data.birthDay)
            setValue("birthCountry", result.data.birthCountry)
            setValue("birthProvince", result.data.birthProvince)
            setValue("birthCityDistrict", result.data.birthCityDistrict)
            setValue("gender", result.data.gender)
            setValue("citizenship", result.data.citizenship)
            setValue("married", result.data.married)
            setValue("partisanship", result.data.partisanship)
            setValue("levelKnowledge", result.data.levelKnowledge)
            setValue("seniority", result.data.seniority)
            setValue("salary", result.data.salary)
            setValue("email", result.data.email)
            setValue("telegram", result.data.telegram)
            setValue("phone", result.data.phone)
        })
    }, [])
   
  const { register, formState: { errors }, handleSubmit, setValue } = useForm(
        {mode:'onBlur', 
            defaultValues:{ }
        }
      );
    const {kadrId} = useLocation()  
    if(kadrId){
        getById(kadrId).then((result)=>console.log(result)); 
        console.log('IDSINI BILAMIZ', kadrId);
    }
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const onSubmit = (data) =>{
        update(id,data)
        navigate('/info', {state:{count:count}})
        setCount(count+1)
    };

  return (
    <form className="bg-blue-200 grid justify-items-center " onSubmit={handleSubmit(onSubmit)}>
        <label className="block m-0">
            <span className="block m-0 font-medium text-slate-700 text-xl">Kadr haqidagi quyidagi formani tahrirlang</span>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Ismingiz</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("firstName", { required: "Ismingizni to'g'ri kiriting", minLength:3, maxLength: 20 })} />
            <p className="text-red-900">{errors.firstName?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Familiyangiz</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("lastName", { required: "Familiyangizni to'g'ri kiriting", minLength:3, maxLength: 20 })} />
            <p className="text-red-900">{errors.lastName?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Otangizni ismi</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("fatherName", { required: "Otangizni ismini to'g'ri kiriting", minLength:3, maxLength: 20 })} />
            <p className="text-red-900">{errors.fatherName?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Tug'ilgan yilingiz</span>
            <input type="number" className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("birthYear", { required: "tug'ilgan yilingizni to'g'ri kiriting", minLength:4, min:1900, max: new Date().getFullYear() })} />
            <p className="text-red-900">{errors.birthYear?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Tug'ilgan oyingiz</span>
            <select className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("birthMonth", { required: "tug'ilgan oyingizni to'g'ri kiriting" })}>
                <option disable="true" value=""></option>
                <option value="yanvar">yanvar</option>
                <option value="fevral">fevral</option>
                <option value="mart">mart</option>
                <option value="april">april</option>
                <option value="may">may</option>
                <option value="iyun">iyun</option>
                <option value="iyul">iyul</option>
                <option value="avgust">avgust</option>
                <option value="sentabr">sentabr</option>
                <option value="oktabr">oktabr</option>
                <option value="noyabr">noyabr</option>
                <option value="dekabr">dekabr</option>
            </select>
            <p className="text-red-900">{errors.birthMonth?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Tug'ilgan kuningiz</span>
            <input type="number" className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("birthDay", { required: "tug'ilgan kuningizni to'g'ri kiriting", min:1, max:31 })} />
            <p className="text-red-900">{errors.birthDay?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Tug'ilgan mamlakatingiz</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("birthCountry", { required: "tug'ilgan mamlakatingizni to'g'ri kiriting", minLength:3, maxLength:30 })} />
            <p className="text-red-900">{errors.birthCountry?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Tug'ilgan viloyatingiz</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("birthProvince", { required: "tug'ilgan viloyatingizni to'g'ri kiriting", minLength:3, maxLength:30 })} />
            <p className="text-red-900">{errors.birthProvince?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Tug'ilgan shahar yoki tumaningiz</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("birthCityDistrict", { required: "tug'ilgan shahar yoki tumaningizni to'g'ri kiriting", minLength:3, maxLength:30 })} />
            <p className="text-red-900">{errors.birthCityDistrict?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Jinsingiz</span>
            <select className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("gender", { required: "jinsingizni to'g'ri kiriting"})}>
                <option value=""></option>
                <option value="female">female</option>
                <option value="male">male</option>
            </select>
            <p className="text-red-900">{errors.gender?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Qaysi mamlakat fuqarosisiz</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("citizenship", { required: "fuqarolikingizni to'g'ri kiriting", minLength:3})} />
            <p className="text-red-900">{errors.citizenship?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Oilalimisiz</span>
            <select className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("married",{ required: "oilaviy holatingizni to'g'ri kiriting"})}>
                <option value=""></option>
                <option value="yes">Oilaliman</option>
                <option value="no">Oilali emasman</option>
            </select>
            <p className="text-red-900">{errors.married?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Partiyaliyligingiz bormi</span>
            <select className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("partisanship", {required:"partiyaviylikingizni to'g'ri kiriting"})}>
                <option value=""></option>
                <option value="yes">Partiyaliyligim bor</option>
                <option value="no">Partiyaliyligim yo'q</option>
            </select>
            <p className="text-red-900">{errors.partisanship?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Ma'lumotingiz</span>
            <select className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("levelKnowledge", {required:"ma'lumot darajaningizni to'g'ri kiriting"})}>
                <option value=""></option>
                <option value="yes">Oliy</option>
                <option value="no">O'rta maxsus</option>
            </select>
            <p className="text-red-900">{errors.levelKnowledge?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Ish stajingiz necha yil</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900"  type="number" {...register("seniority", {required:"ish stajingizni to'g'ri kiriting", min:0})} />
            <p className="text-red-900">{errors.seniority?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Oylik maoshingiz qancha</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900"  type="number" {...register("salary", {required:"oylikish haqingizni to'g'ri kiriting", min:0})} />
            <p className="text-red-900">{errors.salary?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Emailingiz</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900"  type="text" {...register("email", {required:"emailingizni to'g'ri kiriting", minLength:5})} />
            <p className="text-red-900">{errors.email?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Telegram taklif havolangiz</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900" {...register("telegram", {required:"Telegram taklif havolangizni to'g'ri kiriting", minLength:1})} />
            <p className="text-red-900">{errors.telegram?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Telefon qaramingiz</span>
            <input className=" w-96 rounded p-1 px-2 focus:outline-blue-900"  {...register("phone", {required:"Telefon raqamingizni to'g'ri kiriting", minLength:9, maxLength:20})} />
            <p className="text-red-900">{errors.phone?.message}</p>
        </label>
        <label className="block m-0">
            <span className="block m-0 text-sm font-medium text-slate-700">Barcha ma'lumot to'g'ri bo'lsa yuborish tugmasini bosing</span>
            <input className=" w-96 rounded p-1 px-2 ring-transparent focus:outline-blue-900 border-2 bg-blue-500 hover:bg-blue-900 " value="Yuborish" type="submit" />
        </label>
    </form>
  );
}