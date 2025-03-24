import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function SignupForm() {

  const token = localStorage.getItem("user")

  const [data, setData] = useState([JSON.parse(token)]||''); console.log(data);

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
          {['Full Name', 'Phone number', 'Email adressd', 'Password', 'Company name'].map((label, index) => (
            <div className="mb-4" key={index}>
              <label className="block text-sm font-medium text-gray-700">
                {label} {['Full Name', 'Phone number', 'Email address', 'Password'].includes(label) && <span className="text-red-500">*</span>}
              </label>
              <input 
                required
                type={label === 'Password' ? 'password' : 'text'}
                placeholder={label}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                name={label[2]}
                onChange={handleChange}
                

              />
            </div>
          ))}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="agency" onChange={handleChange} className="text-purple-500 focus:ring-purple-500" />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="agency" onChange={handleChange} className="text-purple-500 focus:ring-purple-500" />
                <span>No</span>
              </label>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-400 text-white p-3 rounded-md hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
