import React from 'react';
import react from '../assets/react.svg';

const Navbar=({datos})=>{
    return( 
    <nav className="flex justify-between items-center h-16 bg-green-500 ">
       <div class="">
        <a href="#">
          <span class="sr-only">Admin Llamosa</span>
          <img class=" w-auto sm:h-10 pl-9" src={react} alt=""/>
        </a>
      </div>
      <ul className='max-sm:hidden flex justify-between gap-10 px-9 my-auto'>
        {datos.map((Nav)=>(
            <li className='p-2 hover:bg-blue-500 transition-all hover:border rounded'><a href=''>{Nav.button}</a></li>
        ))}
      </ul>
      {/* <div className='flex justify-between gap-10 px-9 my-auto '>
        <div class=" ">
            <a href="#">
            <h1></h1>
            </a>
        </div>
        <div class="">
            <a href="#">
            <h1>Registro</h1>
            </a>
        </div>
        <div class=" ">
            <a href="#">
            <h1>Contacto</h1>
            </a>
        </div>
      </div> */}
      
    </nav>
    )
    
}
 
export default Navbar;