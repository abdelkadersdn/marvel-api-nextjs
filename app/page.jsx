import Image from "next/image";
import Header from "./components/Header";
import { getCharacters } from "./utils/api";

export default async function Home() {
  const characters = await getCharacters();

  return (
    <>
      <Header />
      <ul className="grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-1 gap-4 w-10/12 mx-auto">
          {characters.results.map((character) => (
            <li key={character.id}>
              <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              height={250}
              width={250}
              alt={character.name}
              style={{height: '200px', width:'100%' , objectFit: 'cover'}}
              />
              <span className="bg-red-600 block font-bold text-center py-2">{character.name}</span>
            </li>
          ))}
      </ul>
    </>
  );
}
