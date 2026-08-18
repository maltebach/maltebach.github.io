import { projects, placeholders } from '../data/projects.js'

export default function Work({ onOpenProject }) {
  const realProjects = Object.entries(projects)

  return (
    <section className="work" id="work">
      <div className="section-head">
        <p className="section-head__label">01 / Selected work</p>
        <h2>Recent projects</h2>
      </div>

      <div className="frame-grid">
        {realProjects.map(([id, p]) => (
          <button
            key={id}
            className="frame"
            type="button"
            onClick={() => onOpenProject(id)}
          >
            <span className="frame__dims">{p.dims}</span>
            <div className="frame__thumb">
              <img src={p.thumb} alt={p.thumbAlt} loading="lazy" />
            </div>
            <div className="frame__meta">
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="frame__tags">
                {p.tags.slice(0, 2).map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </button>
        ))}

        {/* Placeholder slots — replace with real projects the same way as above */}
        {placeholders.map((ph, i) => (
          <a className="frame" href="#" key={i}>
            <span className="frame__dims">{ph.dims}</span>
            <div className="frame__thumb" style={{ background: ph.color }}></div>
            <div className="frame__meta">
              <h3>[Project name]</h3>
              <p>[One-line description — the problem and your role]</p>
              <div className="frame__tags">
                {ph.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
