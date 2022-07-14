import { useRouter } from 'next/router'
import UserDetails from '../../components/UserDetails';

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const Users = await res.json();
  //JSON.stringify(Users);

  return {

    paths: Users.map((user: { id: { toString: () => any; }; }) => ({
      params: { id: user.id.toString() },
    })),
    fallback: false,
  };
}
 
export async function getStaticProps({params}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const Users = await res.json();

  return {
    props: {
      Users,
    }, // will be passed to the page component as props
  }
}


export default function Index(Users: any) {
    
  return (
    <UserDetails user={Users}/>
  ) 
}
