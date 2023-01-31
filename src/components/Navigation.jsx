import { FontToggle, ThemeToggle } from './index'

export const Navigation = () => {
  return (
    <nav className="p-5 flex justify-between items-center">
      <img src="/logo.svg" alt="dictionary" />
      <div className="flex">
        <FontToggle />
        <ThemeToggle />
      </div>
    </nav>
  )
}
