/*-------------------------------------------------------------------
|  🐼 React FC Word
|
|  🐯 Purpose: DISPLAYS THE SEARCHED WORD'S TITLE AND INFORMATION
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Title, SubSection, ErrorFallback } from './'
import { motion } from 'framer-motion'
import { framer_opacity } from '../framer'
import { ErrorBoundary } from 'react-error-boundary'

export const Word = ({ data }) => {
  return (
    <motion.div
      {...framer_opacity}
      className="flex flex-col gap-10 px-5 custom_container"
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Title data={data} />
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SubSectionWrapper data={data} />
      </ErrorBoundary>
    </motion.div>
  )
}

const SubSectionWrapper = ({ data }) => {
  return (
    <>
      {data[0].meanings.map((item, idx) => {
        return <SubSection key={item.partOfSpeech + idx} data={item} />
      })}
    </>
  )
}
