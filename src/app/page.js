import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import CharacterMoving from './animation/characterModels/CharacterMoving'
import CharacterKilling from './animation/killingAnimation/CharacterKilling'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   
    <CharacterKilling name="cooper"/>
    {/* <CharacterMoving name="princess" height="200"/> */}
    </>
  )
}
