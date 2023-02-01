import { HiSearch } from 'react-icons/hi'

export const SearchBox = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 px-5 py-3 border-t dark:border-t-dark-100 md:static md:p-0 md:border-none">
      <div className="relative">
        <input
          type="text"
          className="w-full p-3 rounded-md md:p-5 bg-light-200 dark:bg-dark-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100"
          placeholder="start typing ..."
        />
        <div className="absolute top-0 bottom-0 right-0 p-3 rounded-md md:p-5 bg-light-200 dark:bg-dark-300">
          <HiSearch className="mt-[0.1rem] text-xl text-primary-100" />
        </div>
      </div>
    </div>
  )
}
