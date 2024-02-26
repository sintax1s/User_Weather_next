'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const AddUserButton = ({ user, setUsers }) => {
  const [userIndex, setUserIndex] = useState(-1);

  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const index = existingUsers.findIndex(existingUser => existingUser.id === user.id);
    setUserIndex(index);
  }, [user.id]);

  const handleToggleUser = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const index = existingUsers.findIndex(existingUser => existingUser.id === user.id);

    if (index === -1) {
        const updatedUsers = [...existingUsers, user];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUserIndex(updatedUsers.length - 1);
    } else {
        existingUsers.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        setUserIndex(-1);
        if (setUsers) {
          setUsers(existingUsers);
        }
        
    }
  };

  return (
    <div>
      {userIndex === -1 ? (
        <button onClick={handleToggleUser} 
          className='flex gap-2 border-2 border-blue-800 pointer pt-1 pb-1 pl-3 pr-3 rounded-2xl text-blue-800 bg-white items-center'
        >
            Save User <Image src='/bookmark.png' width={20} height={20} alt='Bookmark'/>
        </button>
      )
      : (
        <button onClick={handleToggleUser} 
          className='flex gap-2 border-2 border-red-600 pointer pt-1 pb-1 pl-3 pr-3 rounded-2xl text-red-600 bg-white items-center'
        >
          Remove User <Image src='/deleteUser.png' width={20} height={20} alt='Trash'/>
        </button>
      )
    }     
    </div>
  );
};

export default AddUserButton;

