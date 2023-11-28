import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import axios from "axios";
import CharacterCard from "../../components/card/card";
import { useSearchParams } from "next/navigation";

interface CharacterDetailsProps {}

function CharacterDetails(props: CharacterDetailsProps) {
  const { user } = useAuthContext();
  const router = useRouter();
  const [char, setChar] = useState<any>({});
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const fetchChar = async (id: string | null) => {
    const url = process.env.NEXT_PUBLIC_CHARACTER_API || '';
    try {
      const { data } = await axios.get(`${url}/${id}`);
      const card = {
        image: data.image,
        origin: data.origin.name,
        name: data.name,
        species: data.species,
        status: data.status,
        gender: data.gender,
      };
      setChar(card);
      
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    if (user == null) {
      router.push("/");
    } else {
      id && fetchChar(id);
    }
  }, [user, id]);

  return (
    <>
      <section className="flex justify-center m-20">
        <CharacterCard {...char} />
      </section>
    </>
  );
}

export default CharacterDetails;