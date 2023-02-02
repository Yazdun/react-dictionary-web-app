import { useDictionary } from '../context'
import { NotFound, NoWords, Title, SubSection } from './'
import { AnimatePresence, motion } from 'framer-motion'
import { framer_opacity } from '../framer'

export const Word = ({ data }) => {
  const { word, isLoading } = useDictionary()

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
    <motion.div
      {...framer_opacity}
      className="flex flex-col gap-10 px-5 custom_container"
    >
      <AnimatePresence mode="wait">
        <Title data={data} />
        {data[0].meanings.map((item, idx) => {
          return <SubSection key={item.partOfSpeech + idx} data={item} />
        })}
      </AnimatePresence>
    </motion.div>
  )
}
