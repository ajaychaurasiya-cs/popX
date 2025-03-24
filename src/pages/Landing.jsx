import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

export default function SignupForm() {

    const navigate = useNavigate()

    const token = localStorage.getItem("user")
   
    // useEffect(()=>{
    //   {token&&navigate("/dashboard")}
    // },[token])

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-5 rounded-lg shadow-md w-96">
          <span className="m-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to PopX </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </span>
          
            <span className="grid gap-5">
            <button
              onClick={()=> navigate("/register")}
              type="submit"
              className="w-full bg-gray-400 text-white p-3 rounded-md hover:bg-purple-700 transition"
            >
              Create Account
            </button>
            <button
              onClick={()=> navigate("/login")}
              type="submit"
              className="w-full bg-gray-400 text-white p-3 rounded-md hover:bg-purple-700 transition"
            >
              Aready Registered? Login
            </button>
            </span>
        </div>
      </div>
    );
  }
  