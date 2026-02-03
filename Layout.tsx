// Next.js + TailwindCSS + Framer Motion // App Router Struktur (Frontend-Basis)

// app/layout.tsx import './globals.css' import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) { return ( <html lang="de" suppressHydrationWarning> <body className="bg-background text-foreground transition-colors duration-300"> <ThemeProvider> {children} </ThemeProvider> </body> </html> ) }

// components/theme-provider.tsx 'use client' import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext<any>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) { const [theme, setTheme] = useState<'dark' | 'light'>('dark')

useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark') localStorage.setItem('theme', theme) }, [theme])

return ( <ThemeContext.Provider value={{ theme, setTheme }}> {children} </ThemeContext.Provider> ) }

export const useTheme = () => useContext(ThemeContext)

// components/navbar.tsx 'use client' import { motion } from 'framer-motion' import { useTheme } from './theme-provider'

export default function Navbar() { const { theme, setTheme } = useTheme()

return ( <motion.nav initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed top-0 w-full backdrop-blur-md bg-black/40 dark:bg-black/40 light:bg-white/60 border-b border-white/10 z-50" > <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"> <span className="font-bold tracking-wide">🚛 ETS2 SPEDITION</span> <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition" > {theme === 'dark' ? '☀️' : '🌙'} </button> </div> </motion.nav> ) }

// app/page.tsx (Landing Page) import Navbar from '@/components/navbar' import { motion } from 'framer-motion'

export default function Home() { return ( <> <Navbar /> <main className="min-h-screen pt-32 space-y-32"> {/* HERO */} <section className="max-w-7xl mx-auto px-6 text-center"> <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold mb-6" > Moderne ETS2 Spedition </motion.h1> <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="max-w-2xl mx-auto text-muted-foreground" > Organisierte Convoys, starke Community und volle Kontrolle – modern, schnell und zentral gesteuert. </motion.p>

<div className="mt-10 flex justify-center gap-4">
        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition shadow-lg">
          Nächster Konvoi
        </button>
        <button className="px-6 py-3 rounded-xl border border-border hover:bg-muted transition">
          Jetzt bewerben
        </button>
      </div>
    </section>

    {/* CONVOYS PREVIEW */}
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10">Nächste Convoys</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[1,2,3].map((c) => (
          <motion.div
            key={c}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-xl transition"
          >
            <span className="text-sm text-blue-500 font-semibold">Geplant</span>
            <h3 className="text-xl font-bold mt-2">Community Convoy #{c}</h3>
            <p className="text-sm text-muted-foreground mt-2">Duisburg → Berlin · Simulation 1</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* GALLERY PREVIEW */}
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10">Galerie</h2>
      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        {[1,2,3,4,5,6].map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-xl bg-muted h-48"
          />
        ))}
      </div>
    </section>

    {/* COMMUNITY */}
    <section className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Unsere Community</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-4xl font-extrabold">120+</p>
          <p className="text-muted-foreground">Convoys</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold">40+</p>
          <p className="text-muted-foreground">Mitglieder</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold">900+</p>
          <p className="text-muted-foreground">Bilder</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="text-center pb-32">
      <h2 className="text-4xl font-bold mb-6">Bereit mitzufahren?</h2>
      <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition shadow-xl">
        Jetzt bewerben
      </button>
    </section>
  </main>
</>

) }