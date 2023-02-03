/*-------------------------------------------------------------------
|  🐼 React FC NoWords / NotFound
|
|  🐯 Purpose: DISPLAYS BANNERS WHEN THERE IS NO WORD OR NO API DATA
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

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
        <p className="px-6 py-3 font-medium text-purple-600 bg-purple-100 rounded-full dark:bg-[#2D153F] dark:text-purple-400">
          #Woman_Life_Freedom
        </p>
      </div>
    </Wrapper>
  )
}

export const NotFound = () => {
  const { errorStatus } = useDictionary()
  const isServerError = errorStatus === 500
  return (
    <Wrapper>
      <Lottie animationData={yellyEmojiNo} loop={true} style={lottieStyles} />
      <h1 className="text-xl font-bold">
        {isServerError ? 'Server Error' : 'Not Found'}
      </h1>
      <p className="text-light-400 dark:text-gray-400 max-w-[30rem] m-auto">
        {isServerError ? (
          <span>
            Sorry ! There is something wrong with our servers and we are working
            on it, please try again in a few minutes
          </span>
        ) : (
          <span>
            Sorry ! We found no result for the word you searched for in our
            dictionary.
          </span>
        )}
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
