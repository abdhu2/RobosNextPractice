import UsersList from "../../components/UsersList";
import { useState,useEffect } from "react";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const Users = await res.json();

  return {
    props: {
      Users,
    }, // will be passed to the page component as props
  }
}

export default function index({Users}) {

  return <UsersList users = {Users}/>

}
