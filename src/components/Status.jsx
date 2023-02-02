import Lottie from 'lottie-react'
import yellyEmojiNo from '../lotties/yelly-emoji-no.json'
import yellyEmojiYep from '../lotties/yelly-emoji-yep.json'
import { useDictionary } from '../context'
import { framer_opacity } from '../framer'
import { motion } from 'framer-motion'

const lottieStyles = {
  height: 150,
  width: 150,
}

export const NoWords = () => {
  return (
    <Wrapper>
      <Lottie animationData={yellyEmojiYep} loop={true} style={lottieStyles} />
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h1 className="text-xl font-bold">Free Online Dictionary</h1>
        <p className="text-light-400 dark:text-gray-400 max-w-[30rem] m-auto">
          Hello there ! You can start using this free online dictionary by
          typing anything in the above searchbox.
        </p>
      </div>
    </Wrapper>
  )
}

export const NotFound = () => {
  const { word } = useDictionary()
  return (
    <Wrapper>
      <Lottie animationData={yellyEmojiNo} loop={true} style={lottieStyles} />
      <h1 className="text-xl font-bold">Not Found</h1>
      <p className="text-light-400 dark:text-gray-400 max-w-[30rem] m-auto">
        Sorry ! We found no result for the word you searched for in our
        dictionary.
      </p>
    </Wrapper>
  )
}

const Wrapper = ({ children }) => {
  return (
    <motion.div {...framer_opacity} className="w-full px-5 custom_container">
      <div className="flex flex-col items-center justify-center w-full gap-2 px-5 py-10 text-center border-2 border-dashed dark:border-dark-100 md:py-12 rounded-xl">
        {children}
      </div>
    </motion.div>
  )
}
