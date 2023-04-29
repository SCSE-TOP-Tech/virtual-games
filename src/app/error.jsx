'use client'
import { GrPowerReset } from 'react-icons/gr'
export default function Error({ error, reset }) {
  //regex to match first Word after "at" from error stack
  const regex = /at ([A-Za-z])\w+/g

  //extract name of page
  const name = error.stack.match(regex)[0].split(' ')[1]
  return (
    <>
      <div>
        There is a problem in {name}: {error.message}{' '}
        <button onClick={() => reset()}>
          <GrPowerReset />
        </button>
      </div>
    </>
  )
}
