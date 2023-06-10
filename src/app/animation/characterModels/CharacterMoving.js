import React from 'react'
import Image from 'next/image'
import cooperMoving from '../../../../public/CharacterMoving/cooperMoving.gif'
import mannMoving from '../../../../public/CharacterMoving/mannMoving.gif'
import brandMoving from '../../../../public/CharacterMoving/brandMoving.gif'
import camenMoving from '../../../../public/CharacterMoving/camenMoving.gif'
import doyleMoving from '../../../../public/CharacterMoving/doyleMoving.gif'
import knightMoving from '../../../../public/CharacterMoving/knightMoving.gif'
import princessMoving from '../../../../public/CharacterMoving/princessMoving.gif'
import romillyMoving from '../../../../public/CharacterMoving/romillyMoving.gif'
import seraphineMoving from '../../../../public/CharacterMoving/seraphineMoving.gif'

export default function CharacterMoving({ name, height, width }) {

  let image;
  switch (name) {
    case 'cooper':
      image = cooperMoving;
      break;
    case 'mann':
      image = mannMoving;
      break;
    case 'brand':
      image = brandMoving;
      break;
    case 'camen':
      image = camenMoving;
      break;
    case 'doyle':
      image = doyleMoving;
      break;
    case 'knight':
      image = knightMoving;
      break;
    case 'princess':
      image = princessMoving;
      break;
    case 'romilly':
      image = romillyMoving;
      break;
    case 'seraphine':
      image = seraphineMoving;
      break;
  }

  return (
    <>
      <h1>{name} component rendered</h1>
      <Image height={height} width={width}
        src={image}
      />
    </>

  )
}
