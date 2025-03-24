import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {

  const token = localStorage.getItem("user")
  const[count, setCount] = useState('')

  const [data] = useState([JSON.parse(token)]||""); console.log(data);
  const navigate = useNavigate();

  const handlechange =()=>{
    localStorage.removeItem("user");
    navigate("/")
  }

  useEffect(()=>{
    if(data===null){
      navigate("/")
    }
  },[data===null])


  const t = [1,2,3]
 useEffect(()=>{
  if(!token){
    for (let i = 0; i < t.length; i++) {
      setTimeout(() => {
      setCount(t[i])
      }, i*1000);
    }
  }
  
  if(!token){
    setTimeout(() => {
      navigate("/")
    }, 3000)
  }
 },[!token])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-5 rounded-lg shadow-md w-96">
        <span className="m-5">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Account settings</h2>
        <span className="grid ">
          <img className="w-md h-md rounded-full" src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg" alt="img" />

          {token?data.map((item,i)=>{
            return(
            <div key={i}>
              <h2 className="font-bold text-2xl">{item.a}</h2>
            </div>)
          }): <p className="font-bold">{count}... Please register </p>}
        </span>
        

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </span>
        <button className="bg-gray-400 hover:bg-purple-600 hover:font-bold hover:text-white
         p-2 rounded-md" onClick={handlechange}>Logout</button>
      </div>
    </div>
  );
}
