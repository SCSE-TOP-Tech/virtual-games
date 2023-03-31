'use client'

export default function Error({ error, reset }) {
  return (
    <div>
      There is a problem in CarmenRoom page: {error.message}
      <button onClick={() => reset()}></button>
    </div>
  )
}
