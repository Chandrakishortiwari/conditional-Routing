import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const authToken = localStorage.getItem("authToken");
  const tokenParsed = JSON.parse(authToken);
  console.log(tokenParsed);
  

  useEffect(() => {
    if(tokenParsed){
    navigate("/");
    }
  
  }, [tokenParsed])
  

    const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload na ho
    console.log(formData);

    if(!formData?.email || !formData.password ){
        alert("please enter the value");
        return null;
    }

    localStorage.setItem("authToken", JSON.stringify(formData));

    navigate("/");


    
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-orange-600">Login</h2>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block mb-1 font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
