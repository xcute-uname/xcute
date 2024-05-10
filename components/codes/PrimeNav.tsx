import React from 'react'
import Log from '../drawings/Log'
import Link from 'next/link';
const pageLinks = [
  {
    name:"Home",
    loc: "/",
  },{
    name:"Notes",
    loc: "/notes",
  }
]
const PrimeNav = () => {
  return (
    <nav className='h-16 fixed top-0 w-full items-center'>
        <div className='flex h-full 2xl:px-10 px-4 justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <Log/>
                <p className=''><span className="text-primary">x</span><span>cute</span></p>
            </div>
            <ul className="sm:hidden md:flex gap-6">
              {
                pageLinks.map((element:{name:string;loc:string;})=>(
                  <li key={element.name} className="">
                    <Link href={element.loc} className='underline'>{element.name}</Link>
                  </li>
                ))
              }
            </ul>
        </div>
    </nav>
  )
}

export default PrimeNav
