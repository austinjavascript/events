import { useEffect, useRef } from 'react'
import Reveal from 'reveal.js'
import Highlight from 'reveal.js/plugin/highlight/highlight'
import Notes from 'reveal.js/plugin/notes/notes'
import 'reveal.js/dist/reveal.css'
import './styles/index.scss'
import Splash from './slides/splash'

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null) // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null) // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: 'slide',
      // other config options
    })

    deckRef.current
      .initialize({
        plugins: [Highlight, Notes],
        disableLayout: true,
      })
      .then(() => {
        // good place for event handlers and plugin setups
      })

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy()
          deckRef.current = null
        }
      } catch (e) {
        console.warn('Reveal.js destroy call failed.')
      }
    }
  }, [])

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <Splash />
      </div>
    </div>
  )
}

export default App
