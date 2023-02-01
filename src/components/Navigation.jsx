import { FontToggle, ThemeToggle } from './index'

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <img src="/logo.svg" alt="dictionary" className="flex" />
      <div className="flex items-center gap-5">
        <FontToggle />
        <ThemeToggle />
      </div>
    </nav>
  )
}
