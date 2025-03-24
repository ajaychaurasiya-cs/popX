import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function SignupForm() {

  const token = localStorage.getItem("user")

  const [data, setData] = useState([JSON.parse(token)]||""); console.log(data);

  const navigate = useNavigate();

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setData({...data, [name]:value})
  }

  const handleSubmit = ()=>{
    if(data){
      localStorage.setItem("user",JSON.stringify(data));
      navigate("/dashboard")
    
    }
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-5 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Create your PopX account</h2>
        <div>
          {['Email adressd', 'Password', ].map((label, index) => (
            <div className="mb-4" key={index}>
              <label className="block text-sm font-medium text-gray-700">
                {label} {['Full Name', 'Phone number', 'Email address', 'Password'].includes(label)}
              </label>
              <input
                type={label === 'Password' ? 'password' : 'text'}
                placeholder={label}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                name={label[2]}
                onChange={handleChange}
                required

              />
            </div>
          ))}
 
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-400 text-white p-3 rounded-md hover:bg-purple-700 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
