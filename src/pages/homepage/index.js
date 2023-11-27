'use client'
import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()
  const [chars, setChars] = useState([])
  console.log('user',user);
    useEffect(() => {
        if (user == null) router.push("/")
    }, [user])
  
  const fetchChars = async () => {
    try {
      const data = await axios.get(`https://rickandmortyapi.com/api/character`)   
      console.log('data', data.data.results)
      setChars(data.data.results)
    } catch (error) {
      console.log({error})
    }
  }
  
    useEffect(() => {
      fetchChars()
      },[])

  return (
    <>
      <h1>Charcters</h1>
      <ul className="">
        {chars.length > 0 && chars.map((char) => {
          return (
            <li key={char.id} className='flex justify-between items-between'>
              <span className="text-center w-1/3">
              {char.name}
              </span>
              <span className="text-center w-1/3">
              {char.status}
              </span>
              <span className="text-center w-1/3">
              {char.species}
              </span>
              <span className="text-center w-1/3">
              <Link href={{
              pathname: '/character/',
              query: { id: char.id },
            }}
  >View</Link>
              </span>
            </li>
          ) 
        })}
      </ul>
    </>
  );
}

export default Page;