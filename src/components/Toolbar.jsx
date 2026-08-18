import { useState } from 'react'

export default function Toolbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className={`toolbar${open ? ' is-open' : ''}`}>
      <a href="#top" className="toolbar__mark" onClick={close}>
        MBH<span className="dot">·</span>
      </a>

      <nav className="toolbar__nav" id="nav">
        <a href="#work" onClick={close}>Work</a>
        <a href="#about" onClick={close}>About</a>
        <a href="#contact" onClick={close}>Contact</a>
      </nav>

      <a href="#contact" className="toolbar__cta" onClick={close}>Let's talk</a>

      <button
        className="toolbar__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span></span><span></span>
      </button>
    </header>
  )
}
