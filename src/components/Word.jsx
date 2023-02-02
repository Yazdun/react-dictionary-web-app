import React from 'react'
import { useDictionary } from '../context'
import { NotFound, NoWords, Title, SubSection } from './'

export const Word = () => {
  const { data, word, isLoading } = useDictionary()

  if (isLoading && word) {
    return
  }

  if (!word) {
    return <NoWords />
  }

  if (!data) {
    return <NotFound />
  }

  return (
    <div className="flex flex-col gap-10 px-5 custom_container">
      <Title />
      {data[0].meanings.map((item, idx) => {
        return <SubSection key={item.partOfSpeech + idx} data={item} />
      })}
    </div>
  )
}
