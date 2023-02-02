import React from 'react'
import { useDictionary } from '../context'

export const Title = () => {
  const { data, word, isLoading } = useDictionary()

  return (
    <div>
      <h1 className="text-4xl font-bold capitalize">{data[0].word}</h1>
      <p className="text-primary-100">
        {data[0].phonetic || data[0].phonetics[1].text}
      </p>
    </div>
  )
}
