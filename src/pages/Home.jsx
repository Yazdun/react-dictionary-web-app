/*-------------------------------------------------------------------
|  🐼 React FC Home
|
|  🐯 Purpose: HOME PAGE COMPONENT FOR THE REACT ROUTER
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { AnimatePresence } from 'framer-motion'
import { Word, SearchBox, NoWords, NotFound } from '../components'
import { useDictionary } from '../context'

export const Home = () => {
  const { data, word, isLoading } = useDictionary()
  return (
    <div className="flex flex-col gap-5">
      <SearchBox />
      <AnimatePresence mode="wait" initial={false}>
        {data ? (
          <Word key={word} data={data} />
        ) : !word ? (
          <NoWords key="noooo" />
        ) : (
          !isLoading && <NotFound key="yeeees" />
        )}
      </AnimatePresence>
    </div>
  )
}
