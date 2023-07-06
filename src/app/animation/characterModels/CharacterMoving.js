import Image from 'next/image'
import fetchCharacter from "@/pages/api/characters/fetchCharacter";

export default function CharacterMoving({ name, height, width }) {

  return (
    <>
      <h1>{name} component rendered</h1>
        { fetchCharacter(name).then(data =>
            <Image height={ height } width={ width } alt={name}
                 src={ data.actions.move.src }
            />)
        }
    </>

  )
}
