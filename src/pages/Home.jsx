import { Content, SearchBox } from '../components'
import { useDictionary } from '../context'

export const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <SearchBox />
      <Content />
    </div>
  )
}
