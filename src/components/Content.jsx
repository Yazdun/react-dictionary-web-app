import React from 'react'
import { useDictionary } from '../context'

export const Content = () => {
  const { data, word } = useDictionary()

  if (!word) {
    return <div>Search something</div>
  }

  if (!data) {
    return <div>not found</div>
  }

  return (
    <div className="mt-5">
      <h1 className="text-4xl font-bold capitalize">{data[0]?.word}</h1>
    </div>
  )
}
