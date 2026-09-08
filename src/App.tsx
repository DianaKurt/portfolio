import { CustomCursor } from './components/CustomCursor'
import { Header } from './components/Header'
import { useTheme } from './hooks/useTheme'
import { LocaleProvider } from './i18n/LocaleContext'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { profile } from './data/content'
import './components/CustomCursor.css'
import './components/LanguageToggle.css'
import './components/ThemeToggle.css'
import './App.css'

function AppShell() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <CustomCursor />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </>
  )
}

function App() {
  return (
    <LocaleProvider>
      <AppShell />
    </LocaleProvider>
  )
}

export default App
