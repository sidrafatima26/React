import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
    const navigate = useNavigate();
    console.log(navigate);
    function handleNav(){
        navigate("/");
    }
    
    return(
        <div>
        <div  className='font-mono font-bold text-blue-900 mx-auto text-3xl' > Page Not Found </div>
        <button onClick={handleNav} className='hover:shadow-xl text-xl font-bold bg-blue-400 text-white rounded-lg p-3'>Click to Go to Home Page</button>
        </div>
    );

}
export default Notfound;