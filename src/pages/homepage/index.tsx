import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Loading from "../../components/loading/loading";
import firebase_app from '@/firebase/config';
import { getAuth } from 'firebase/auth';

const Page: React.FC = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const [chars, setChars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(firebase_app);

  useEffect(() => {
    if (user == null) {
      router.push("/");
    } else {
      fetchChars();
    }
  }, [user]);

  const fetchChars = async () => {
    const url = process.env.NEXT_PUBLIC_CHARACTER_API || '';
    try {
      const { data } = await axios.get(url);
      setChars(data.results);
    } catch (error) {
      console.log({ error });
    }
    setLoading(false);
  };

  if (loading) return <><Loading /></>;
  return (
    <main className="">
      <header className="flex justify-between rounded-lg p-2"><h1 className="text-lg">Rick & Morty</h1> <button onClick={() => auth.signOut()} className='bg-gray-700 p-1 border border-1 rounded-lg text-white'>Logout</button></header>
      {chars.length > 0 ? <ul className="border border-1 rounded-lg m-2 flex flex-col gap-1">
        {chars.map((char) => (
          <li key={char.id} className='flex justify-between items-between gap-2'>
            <span className="text-center w-1/4">
              {char.name}
            </span>
            <span className="text-center w-1/4">
              {char.status}
            </span>
            <span className="text-center w-1/4">
              {char.species}
            </span>
            <span className="text-center bg-gray-700 p-2 rounded-lg text-white">
              <Link
                href={{
                  pathname: '/charachter',
                  query: { id: char.id },
                }}
              >View</Link>
            </span>
          </li>
        ))}
      </ul> :
      <p>No characters available!</p>
      }
    </main>
  );
}

export default Page;
