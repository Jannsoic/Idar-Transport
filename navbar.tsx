'use client'
import { useTheme } from './theme-provider'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  return (
    <nav>
      <span>ETS2 Spedition</span>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Switch
      </button>
    </nav>
  )
}