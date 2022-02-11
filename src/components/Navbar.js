import React from 'react';
import { Link } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc'
import Search from './Search';
const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-200 dark:border-gray-700'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
      <div className='flex'>
        <Link to="/" className='flex h-11 text-2xl items-center text-center font-bold bg-blue-500 text-white px-2 py-1 rounded dark:bg-gray-500 dark:text-gray-900'>
            Google <FcSearch className=''/>
        </Link>
          <Search />
      </div>  
        <button type="button" className='text-sm font-semibold bg-blue-200 dark:bg-gray-50 dark:text-gray-900 border rounded-full px-4 py-2 hover:shadow-lg'
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      
    </div>
  )
};

export default Navbar;
