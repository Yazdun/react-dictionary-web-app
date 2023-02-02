import React from 'react'
import { useDictionary } from '../context'
import { NotFound, NoWords } from './Status'
import { SubSection } from './SubSection'

export const Word = () => {
  const { data, word, isLoading } = useDictionary()

  console.log(data)

  if (!word) {
    return <NoWords />
  }

  if (!data) {
    return <NotFound />
  }

  return (
    <div className="flex flex-col gap-10 px-5 custom_container">
      <div>
        <h1 className="text-4xl font-bold capitalize">{data[0].word}</h1>
        <p className="text-primary-100">
          {data[0].phonetic || data[0].phonetics[1].text}
        </p>
      </div>

      {data[0].meanings.map(item => {
        return <SubSection key={item.partOfSpeech} data={item} />
      })}
    </div>
  )
}
