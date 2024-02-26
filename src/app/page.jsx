'use client';

import { getUsers } from "@/actions/getUsers";
import { useEffect, useState } from "react";

import ResponsiveMapWithUsers from "@/components/ResponsiveMapWithUsers";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(1)
      .then(data => {
        setUsers(data)
      })
  }, [])

  return (
    <ResponsiveMapWithUsers 
      users={users}
      setUsers={setUsers}
    />
  );
}

