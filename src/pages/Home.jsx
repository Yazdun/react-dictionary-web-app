import { AnimatePresence } from 'framer-motion'
import { Word, SearchBox } from '../components'
import { useDictionary } from '../context'

export const Home = () => {
  const { data, word } = useDictionary()
  console.log(data)
  return (
    <div className="flex flex-col gap-5">
      <SearchBox />
      <AnimatePresence mode="wait">
        {data && <Word key={word} data={data} />}
      </AnimatePresence>
    </div>
  )
}
