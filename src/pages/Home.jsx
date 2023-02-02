import { AnimatePresence } from 'framer-motion'
import { Word, SearchBox, NoWords, NotFound } from '../components'
import { useDictionary } from '../context'

export const Home = () => {
  const { data, word } = useDictionary()
  return (
    <div className="flex flex-col gap-5">
      <SearchBox />
      <AnimatePresence mode="wait">
        {data ? (
          <Word key={word} data={data} />
        ) : !word ? (
          <NoWords key="noooo" />
        ) : (
          <NotFound key="yeeees" />
        )}
      </AnimatePresence>
    </div>
  )
}
