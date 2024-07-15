import React,{useState, useEffect,useRef} from "react";
import "./Connect.css";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConnectForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email:"",
    message:""
  })

  const handleChange = (e)=>{
    console.log(e.target.id)
    setFormData({...formData, [e.target.id]:e.target.value})
  }

 

  let userSchema = Yup.object({
    user_name: Yup.string().required("Name is required"),
    user_email: Yup.string().email("Invalid Email").required("Email is required"),
    message: Yup.string().required("message is required"),
   
  });

  let sendemail = ()=>{
    emailjs
    .sendForm('service_wpb9y0e', 'template_urkum5n', form.current, {
      publicKey: '2Wy-kNrXLUknqsIWx',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        toast.success("I will connect you soon !")
        setFormData({ 
          user_name: " ",
          user_email:" ",
         message:" "
       })
       setErrors({})
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }

  let handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
       await userSchema.validate(formData,{abortEarly:false});
       console.log(formData)

       //sending email to me 
       sendemail()

       
    }catch(error){
      console.log(error.inner);
      let newErr = {}
      error.inner.map((err)=>{
        newErr[err.path] = err.message

      })
      console.log(newErr)
      setErrors(newErr)
    }
  };

  useEffect(()=>{
    console.log(formData)
  },[formData])
  
  return (
    <form className="py-5  px-[1rem] md:px-0 md:pr-24  h-full text-base font-family-['Nunito', sans-serif ] flex flex-col items-center  justify-evenly" ref={form} >
      <div className="flex flex-col  w-full mb-7 ">
        <label htmlFor="user_name" className="text-[rgb(88,88,88)] mb-2">
          <i className="fa-regular fa-user"></i> Name
          <span className="text-red-700 ps-3 uppercase font-bold ">
         { errors.user_name }
          </span>
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="rounded border border-1 border-[rgb(88,88,88,0.2)] focus:ring-2 focus:ring-[#1788ae] focus:outline-none focus:shadow-none"
          value={formData.user_name}
          onChange={(e)=>{handleChange(e)}}
        />
      </div>

      <div className="flex flex-col  w-full mb-7 ">
        <label htmlFor="user_email" className="text-[#585858] mb-2">
          <i className="fa-regular fa-envelope-open"></i> Email
          <span className="text-red-700 ps-3 uppercase font-bold">
          {errors.user_email }
          </span>
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="rounded border border-1 border-[rgb(88,88,88,0.2)] focus:ring-2 focus:ring-[#1788ae] focus:outline-none focus:shadow-none"
          value={formData.user_email}
          onChange={(e)=>{handleChange(e)}}
         
          
        />
      </div>

      <div className="flex flex-col  w-full mb-7 ">
        <label htmlFor="message" className="text-[#585858] mb-2">
          <i className="fa-regular fa-message "></i> Message
          <span className="text-red-700 ps-3 uppercase font-bold">
          {errors.message }
          </span>
        </label>
        <textarea
          type="email"
          name="message"
          id="message"
          className="rounded border border-1 border-[rgb(88,88,88,0.2)] focus:ring-2 focus:ring-[#1788ae] focus:outline-none focus:shadow-none"
          rows="5"
           value={formData.message}
           onChange={(e)=>{handleChange(e)}}
          
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-[#1788ae] text-white w-full py-2 rounded hover:scale-110 duration-500"
        onClick={handleSubmit}
      >
        <i className="fa-solid fa-paper-plane"></i> &nbsp; Send Message{" "}
      </button>
    </form>
  );
};

export default ConnectForm;
