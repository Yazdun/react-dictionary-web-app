import { useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { ImSpinner2 } from 'react-icons/im'
import { useDictionary } from '../context'

export const SearchBox = () => {
  const [timer, setTimer] = useState(null)
  const { setWord, word, isLoading } = useDictionary()

  const inputChanged = e => {
    clearTimeout(timer)
    const newTimer = setTimeout(() => {
      setWord(e.target.value)
    }, 1000)
    setTimer(newTimer)
  }

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full p-3 rounded-md md:p-5 bg-light-200 dark:bg-dark-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100"
        placeholder="start typing ..."
        onChange={inputChanged}
      />
      <div className="absolute top-0 bottom-0 right-0 p-3 rounded-md md:p-5 bg-light-200 dark:bg-dark-300">
        {word && isLoading ? (
          <Loading />
        ) : (
          <HiSearch className="mt-[0.1rem] text-xl text-primary-100" />
        )}
      </div>
    </div>
  )
}

const Loading = () => {
  return (
    <div class=" animate-spin" role="status">
      <ImSpinner2 className="mt-[0.1rem] text-xl text-primary-100" />
    </div>
  )
}
