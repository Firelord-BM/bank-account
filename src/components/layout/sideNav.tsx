"use client"
import React, {useState} from "react"
import Link from "next/link"
import {FiDollarSign,FiSave, FiHome,FiBriefcase, FiUser} from "react-icons/fi";
import { usePathname } from 'next/navigation'; 

const SideNav = () => {
    const pathname = usePathname()
    const DashboardLinks = [
        {
          name:'Dashboard',
          href:'/dashboard',
          role:0,
          icon:FiHome,
    
        },
        {
          name:'Savings',
          href:'/savings',
          role:0,
          icon:FiSave,
        },
        {
          name:'Profile',
          href:'/profile',
          role:0,
          icon:FiUser,
        },
        {
            name:'Loan',
            href:'/loan',
            role:0,
            icon: FiDollarSign,
          },
          {
            name:'Account',
            href:'/account',
            role:0,
            icon: FiBriefcase
            
          },
      
    
    
    
      
      ];

    return(
        <div className="sidebar md:pr-10 rounded-r-md bg-white text-black/70">
            <h1 className="font-bold text-xl md:text-4xl tracking-[3px] md:tracking-[5px] pt-6 mx-auto text-center"><em>i&nbsp;</em>BANK
            </h1>
            <br/>
            <hr/>
            <br/>

            {DashboardLinks.map((link) =>{
                const isActive = pathname === link.href

                return(
                    <ul 
                    className=""
                    key={link.name}>
                        <Link 
                        className={isActive ? "text-black" : ""}
                        href={link.href}
                        key={link.name}>

                            <li className="py-4 px-4 hover:cursor-pointer flex ">
                                <p className={`flex gap-3 px-6 md:px-4 py-2 rounded-md my-auto ${isActive ? "bg-gray-200" : ""}`}>
                                    <link.icon
                                    size = {25}
                                    className={`my-auto  ${isActive ? "stroke-black" : "" }`}/>
                                   <span className="hidden md:block"> {link.name}</span>
                                </p>
                            </li>
                        </Link>
                    </ul>
                )
            })}
            <footer className="border-b-2 pt-6 mx-auto text-center md:flex hidden"> All rights reserved</footer>

        </div>
    )
}

export default SideNav