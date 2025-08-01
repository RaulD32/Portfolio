import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 bg-neutral-950">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  )
}

export default App;
