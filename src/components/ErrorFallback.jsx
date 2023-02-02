export const ErrorFallback = () => {
  return (
    <div className="p-5 font-medium text-center text-red-600 border-2 border-red-600 border-dashed md:py-10 dark:text-red-500 dark:border-red-500 rounded-xl">
      <p className="max-w-[25rem] m-auto">
        Sorry ! Something has gone wrong and this section cannot be displayed
        properly.
      </p>
    </div>
  )
}
