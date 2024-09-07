import React from 'react';
import "./Header.css";
import logo from '../../assets/images/logo.jpeg';
import { CiHome } from "react-icons/ci";
import { IoIosFlash } from 'react-icons/io';
import { CiVideoOn } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { GrBasket } from 'react-icons/gr';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FiMessageSquare } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { FcBusinesswoman } from 'react-icons/fc';
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <div className='Navbar'>
        <img src={logo} alt='lg' />
         <div className='Buttons_options'>
          <div id="search">
            <div className="mb-3 xl:w-96">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative h-15 m-0 block flex-auto rounded-3xl border border-solid border-neutral-300 bg-gray-100 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2" />
                <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <button id="btn"><CiHome  /></button>
          <button id="btn"><IoIosFlash /></button>
          <button id="btn"><CiVideoOn /></button>
          <button id="btn"><CgProfile /></button>
          <button id="btn"><GrBasket /></button>
        </div>
        <div className='Buttons_options_2'>
         
          <button id="btn_1">< IoNotificationsOutline /></button>
          <button id="btn_1"><FiMessageSquare /></button>
          <Link to="/settings"> <button id="btn_1"><IoSettingsOutline /></button> </Link>
           
         
          <button id="btn_1"><FcBusinesswoman /></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
