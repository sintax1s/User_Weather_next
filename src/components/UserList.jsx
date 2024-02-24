import React from 'react';
import UserCard from './UserCard';

const UserList = ({users}) => {
  console.log(users);
  return (
    <>
      {users ? (
        users.map((user) => (
         <UserCard            
            key={user.login.uuid}
            name={user.name}
            location={user.location} 
            email={user.email} 
            gender={user.gender}
            profileImage={user.picture.medium}
            weather={user.weather}
          />
      ))
      )
      : (
        <p>No available users!</p>
      )
      }
    </>
  )
}

export default UserList;