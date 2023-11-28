import React from 'react';
import Image from 'next/image';

interface CharacterCardProps {
  image: string;
  origin: string;
  name: string;
  species: string;
  status: string;
  gender: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ image, origin, name, species, status, gender }) => {
  return (
    <main className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
      <section className="relative h-48 w-full flex justify-center">
        {image && <Image
          priority={true}
          src={image}
          alt='Avatar'
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />}
        </section>
  
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <span className='font-bold'>Origin:</span> {origin}
        </p>
        <p className="text-gray-700 text-base">
          <span className='font-bold'>Species:</span> {species}
        </p>
        <p className="text-gray-700 text-base">
          <span className='font-bold'>Status:</span> {status}
        </p>
        <p className="text-gray-700 text-base">
          <span className='font-bold'>Gender:</span> {gender}
        </p>
      </div>
    </main>
  );
};

export default CharacterCard;