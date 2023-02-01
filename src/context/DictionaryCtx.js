import { useContext, createContext, useState } from 'react'
import { _getMeaning } from '../api/dictionary'
import { useModifiedSWR } from '../hooks'

const DictionaryContext = createContext()

export function DictionaryProvider({ children }) {
  const [word, setWord] = useState()

  const { data, isLoading } = useModifiedSWR(word ? _getMeaning(word) : null)

  return (
    <DictionaryContext.Provider value={{ word, setWord, data, isLoading }}>
      {children}
    </DictionaryContext.Provider>
  )
}

export function useDictionary() {
  return useContext(DictionaryContext)
}
