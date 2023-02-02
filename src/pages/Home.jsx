import { Word, SearchBox, SubSection } from '../components'

export const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <SearchBox />
      <Word />
    </div>
  )
}
