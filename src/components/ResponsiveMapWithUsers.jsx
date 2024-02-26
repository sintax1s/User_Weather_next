'use client';

import React, { useEffect, useState } from 'react'
import UserList from './UserList';
import LoadMore from './LoadMore';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./Map/Map'), { ssr: false});

const ResponsiveMapWithUsers = ({users, setUsers}) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && isOpen && window.innerWidth < 1080) {
        setIsOpen(false);
      }
    };
  
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isOpen, setIsOpen]);
  

  return (
    <div className="flex">
    {!isOpen && (
      <div className='xxxl:w-9/12 xs:w-full'>
        <DynamicMap users={users}/>
      </div>
    )}
    <div className='grid-cols-1 gap-4 overflow-y-scroll h-screen p-3 xs:hidden xl:w-5/12 xxl+:grid xxxl:w-3/12'>
      <UserList users={users} setUsers={pathname === '/saved-users' ? setUsers : undefined}/>
      {pathname !== '/saved-users' && (
        <LoadMore setUsers={setUsers} users={users}/> 
      )}
      
    </div>
    {isOpen && (
    <aside className={cn(`grid grid-cols-1 pr-5 pl-5 gap-4 overflow-y-scroll h-screen w-full fixed z-10`, {'hidden': !isOpen})}>
      <UserList users={users} setUsers={pathname === '/saved-users' ? setUsers : undefined}/>
      {pathname !== '/saved-users' && (
        <LoadMore setUsers={setUsers} users={users}/> 
      )}
    </aside>
  )}
    <button onClick={() => setIsOpen(prev => !prev)} className="fixed top-4 right-4 xxl+:hidden bg-gray-200 p-2 rounded z-20">
      {isOpen ? 'Hide Users' : 'Show Users'}
    </button>
  </div>
  )
}

export default ResponsiveMapWithUsers;