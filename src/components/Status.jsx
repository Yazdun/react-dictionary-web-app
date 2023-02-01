import React from 'react'

export const NoWords = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1>What are you looking for ?</h1>
      <p>Start using this dictionary by typing anything in the field above</p>
    </div>
  )
}

export const NotFound = () => {
  return <div>Not Found</div>
}
