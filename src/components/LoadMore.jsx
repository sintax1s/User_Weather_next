"use client";

import { getUsers } from '@/actions/getUsers';
import React, { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import CircularProgress from '@mui/material/CircularProgress';
let page = 2;

const LoadMore = ({setUsers, users}) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const delay = 1000;

      const timeoutId = setTimeout(() => {
        getUsers(page)
          .then(data => {
            setUsers(prev => [...prev, ...data])
            page++;
          })
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView, setUsers]);

  return (
    <>
      {!!users.length && (
        <div ref={ref} className='flex justify-center'>
          {inView && <CircularProgress />}
        </div>
      )}
    </>
  );
}

export default LoadMore;
