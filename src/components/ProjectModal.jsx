import { useEffect, useRef } from 'react'

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null)
  const isOpen = Boolean(project)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const onKeyDown = e => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <div className="modal" aria-hidden={!isOpen}>
      <div className="modal__backdrop" onClick={onClose}></div>
      <div className="modal__panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="modal__close" ref={closeBtnRef} aria-label="Close" onClick={onClose}>
          &times;
        </button>

        {project && (
          <>
            <div className="modal__gallery">
              {project.media.map((item, i) =>
                item.type === 'video' ? (
                  <video key={i} src={item.src} poster={item.poster} controls preload="metadata" />
                ) : (
                  <img key={i} src={item.src} alt={item.alt} loading="lazy" />
                )
              )}
            </div>

            <div className="modal__body">
              <p className="modal__category">{project.category}</p>
              <h3 id="modalTitle">{project.title}</h3>
              <p>{project.description}</p>
              <div className="modal__tags">
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
