import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar(props) {
    

    return (
        <>
            <header className="bg-slate-950 flex justify-between capitalize px-6 py-[20px] text-white gap-2 w-full">
          <div className="flex gap-4">
            <Link typeof='{/}'>
            <p className="cursor-pointer flex items-center gap-2 md:hover:text-orange-700">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2L2 10V22H6V14H18V22H22V10L12 2ZM8 13V20H16V13H20L12 7L4 13H8Z"
                  fill="currentColor"
                />
              </svg>
              Home
            </p>
            </Link>
            <Link to = {"/Dashboard"}>
            <p className="cursor-pointer md:hover:text-orange-700">
              Go To Dashboard
            </p></Link>
            <Link to = {"/"}>
            <p className="cursor-pointer">Dot</p></Link>
          </div>
          <nav>
            <ul className="hidden gap-4 md:flex">
            <Link to = {"/About"}>
              <li className="cursor-pointer md:hover:text-orange-700">
                About Us
              </li>
              </Link>
              <Link to ={"/Contact"}>
              <li className="cursor-pointer md:hover:text-orange-700">
                Contact Us
              </li>
              </Link>
              
              <li className="cursor-pointer md:hover:text-orange-700">
                Sign Up
              </li>
              <li className="cursor-pointer md:hover:text-orange-700">
                Log in
              </li>
            </ul>
            <button className="md:hidden">Show</button>
          </nav>
        </header>
        </>
    )
}
