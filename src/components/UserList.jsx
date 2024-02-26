import React from 'react';
import UserCard from './UserCard';

const UserList = ({users, setUsers}) => {
  return (
    <>
      {users.map((user) => (
         <UserCard            
            key={user.login?.uuid || user.id}
            name={user.name}
            coordinates={user.coordinates}
            location={user.location}
            email={user.email} 
            gender={user.gender}
            profileImage={user.picture?.medium || user.profileImage}
            weather={user.weather}
            id={user.login?.uuid || user.id}
            setUsers={setUsers}
          />
        ))}
    </>
  )
}

export default UserList;
