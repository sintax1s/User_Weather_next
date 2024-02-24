"use client";

import { getUsers } from '@/actions/getUsers';
import React, { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import UserList from './UserList';
import UserCard from './UserCard';
import axios from 'axios';

let page = 2;

const LoadMore = () => {
  const { ref, inView } = useInView();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (inView) {
      const delay = 500;

      const timeoutId = setTimeout(() => {
        getUsers(page)
          .then(data => {
            console.log(data);
            setUsers(prev => [...prev, ...data])
            page++;
          })
      }, delay);
    }
  }, [inView, users]);

  return (
    <>
      <UserList users={users} />
      <div ref={ref}></div>
    </>
  );
}

export default LoadMore;
