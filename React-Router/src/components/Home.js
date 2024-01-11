import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return(
        <div>
            <Outlet></Outlet>
            <div className='font-mono font-bold text-blue-900 mx-auto text-3xl'> Home Page </div>
        </div>
    );

}
export default Home;