import UserList from "@/components/userList";
import { getUsers } from "@/actions/getUsers";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
  const users = await getUsers(1);
/*   console.log(users[0].weather); */
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello World!
      </h1>
      <div className='grid xs:grid-cols-1 xl:grid-cols-2 xxl:grid-cols-3 gap-4'>
        {/* {console.log(users)} */}
        <UserList users={users}/>
        <LoadMore />
      </div>
    </>   
  );
}
