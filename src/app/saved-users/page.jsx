'use client';

import CustomLink from '@/components/CustomLink';
import Loader from '@/components/Loader';
import ResponsiveMapWithUsers from '@/components/ResponsiveMapWithUsers';
import UserList from '@/components/UserList';
import React, { useEffect, useState } from 'react';


const Page = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
    setLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {users.length ? (
        <ResponsiveMapWithUsers 
          users={users} 
          setUsers={setUsers}
        />
      ) : (
        <div className='flex h-screen justify-center items-center'>
          <p>No available users!</p>
        </div>
      )}
    </div>
  );
}


export default Page;