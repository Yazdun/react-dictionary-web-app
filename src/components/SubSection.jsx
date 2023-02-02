/*-------------------------------------------------------------------
|  🐼 React FC SubSection
|
|  🐯 Purpose: DISPLAYS THE SEARCHED WORD DETAILS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

export const SubSection = ({ data }) => {
  const { partOfSpeech, definitions } = data
  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex">
        <h2 className="relative pr-5 text-lg italic font-bold min-w-14 bg-light-100 dark:bg-dark-400">
          {partOfSpeech}
        </h2>
        <div className="absolute top-4 left-0  -z-10 right-0 h-[0.1rem] rounded-full bg-light-200 dark:bg-dark-200"></div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="dark:font-medium text-light-400">Meaning</p>
        <ul className="flex flex-col gap-3 ml-5 list-disc marker:text-primary-100">
          {definitions.map(item => {
            return <li key={item.definition}>{item.definition}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
