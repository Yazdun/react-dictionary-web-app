import { useContext, createContext, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { _getMeaning } from '../api/dictionary'
import { useModifiedSWR } from '../hooks'

const DictionaryContext = createContext()

export function DictionaryProvider({ children }) {
  const [searchParams] = useSearchParams({})
  const [word, setWord] = useState('')

  useEffect(() => {
    setWord(searchParams.get('word') || null)
  }, [])

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
