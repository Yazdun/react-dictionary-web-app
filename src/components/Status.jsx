import Lottie from 'lottie-react'
import yellyEmojiNo from '../lotties/yelly-emoji-no.json'
import yellyEmojiYep from '../lotties/yelly-emoji-yep.json'
import { useDictionary } from '../context'

const lottieStyles = {
  height: 150,
  width: 150,
}

export const NoWords = () => {
  return (
    <Wrapper>
      <Lottie animationData={yellyEmojiYep} loop={true} style={lottieStyles} />

      <div className="flex flex-col items-center justify-center text-center">
        <h1>What are you looking for ?</h1>
        <p>Start using this dictionary by typing anything in the field above</p>
      </div>
    </Wrapper>
  )
}

export const NotFound = () => {
  const { word } = useDictionary()
  return (
    <Wrapper>
      <Lottie animationData={yellyEmojiNo} loop={true} style={lottieStyles} />
      <h1 className="text-light-400 dark:text-gray-400">
        Sorry ! We found no result for the word{' '}
        <span className="font-semibold text-black dark:text-white">{word}</span>{' '}
        in our dictionary.
      </h1>
    </Wrapper>
  )
}

const Wrapper = ({ children }) => {
  return (
    <div className="w-full px-5 custom_container">
      <div className="flex flex-col items-center justify-center w-full gap-2 px-5 py-10 text-center border-2 border-dashed dark:border-dark-100 md:py-20 rounded-xl">
        {children}
      </div>
    </div>
  )
}
