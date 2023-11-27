'use client'
import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
// 'use client'
import { useParams } from 'next/navigation';
import axios from "axios";
import Link from "next/link";
function CharacterDetails() {
    const { user } = useAuthContext()
    const router = useRouter()
    const [char, setChar] = useState({})
    // const { id } = useParams();
    // useEffect(() => {
    //     if (user == null) router.push("/")
    // }, [user])
    // console.log('router', router.query)
  // const fetchChar = async () => {
  //   try {
  //     // const data = await axios.get(`https://rickandmortyapi.com/api/character/${router.query.id}`)
  //     console.log('data', router.query)
  //     // setChars(data.data.r)
  //   } catch (error) {
  //     console.log({error})
  //   }
  // }
  
    useEffect(() => {
      // fetchChar()
      if (router.isReady) {
        const id = router.query.id;
        console.log('id', id)
        // write whatever you want
  
      } else {
        console.log('hello')
      }
    //  console.log('id', id)
      },[router.isReady])

  return (
    <>
      <h1>Charcter</h1>
      {/* <ul className="">
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
              <Link href={}>View</Link>
              </span>
            </li>
          ) 
        })}
      </ul> */}
    </>
  );
}

export default CharacterDetails;