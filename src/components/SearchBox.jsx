import { HiSearch } from 'react-icons/hi'

export const SearchBox = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full p-5 rounded-md bg-light-200 dark:bg-dark-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100"
        placeholder="start typing ..."
      />
      <div className="absolute top-0 bottom-0 right-0 p-5 rounded-md bg-light-200 dark:bg-dark-300">
        <HiSearch className="text-xl text-primary-100" />
      </div>
    </div>
  )
}
