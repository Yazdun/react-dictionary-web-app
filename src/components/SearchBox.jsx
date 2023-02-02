/*-------------------------------------------------------------------
|  🐼 React FC SearchBox
|
|  🐯 Purpose: ALLOWS USERS TO SEARCH FOR DIFFERENT WORDS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { ImSpinner2 } from 'react-icons/im'
import { useDictionary } from '../context'
import { useScrollDirection } from '../hooks'
import cn from 'classnames'
import { useSearchParams } from 'react-router-dom'

export const SearchBox = () => {
  const [timer, setTimer] = useState(null)
  const { setWord, word, isLoading } = useDictionary()
  const scrollDirection = useScrollDirection()
  const [searchParams, setSearchParams] = useSearchParams({})

  const inputChanged = e => {
    clearTimeout(timer)
    const newTimer = setTimeout(() => {
      setWord(e.target.value)
      e.target.value
        ? setSearchParams({ word: e.target.value })
        : setSearchParams({})
    }, 900)
    setTimer(newTimer)
  }

  return (
    <div
      className={cn(
        'sticky top-0 z-40 py-5 bg-light-100 dark:bg-dark-400 md:dark:bg-transparent md:dark:backdrop-blur-xl',
        scrollDirection > 100 &&
          'border-b shadow-sm dark:shadow-none dark:border-b-dark-100',
      )}
    >
      <div className="px-5 custom_container">
        <div className="relative">
          <label htmlFor="search" className="sr-only">
            enter the word to search
          </label>
          <input
            id="search"
            type="text"
            className="w-full p-3 rounded-md md:p-5 bg-light-200 dark:bg-dark-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100"
            placeholder="start typing ..."
            onChange={inputChanged}
            defaultValue={word}
          />
          <div className="absolute top-0 bottom-0 right-0 p-3 rounded-md md:p-5 bg-light-200 dark:bg-dark-300">
            {word && isLoading ? (
              <Loading />
            ) : (
              <HiSearch className="mt-[0.1rem] text-xl text-primary-100" />
            )}
          </div>
        </div>
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
