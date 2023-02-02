import React from 'react'
import { useDictionary } from '../context'
import { NotFound, NoWords } from './Status'

export const Content = () => {
  const { data, word, isLoading } = useDictionary()

  if (!word) {
    return <NoWords />
  }

  if (!data) {
    return <NotFound />
  }

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold capitalize">{data[0].word}</h1>
        <p className="text-primary-100">{data[0].phonetic}</p>
      </div>
    </div>
  )
}
