const skills = [
  'Figma', 'UX Design & Usability Testing', 'Wireframing & Prototyping',
  'User Research', 'Unity', 'Unreal Engine', 'Blender', 'React',
  'Python', 'JavaScript / HTML', 'C#', 'Scrum & Agile',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-head">
        <p className="section-head__label">02 / About</p>
        <h2>A little more about me</h2>
      </div>

      <div className="about__grid">
        <div className="about__portrait" style={{ background: '#D6E0FF' }}>
          {/* Replace with <img src="/assets/img/you.jpg" alt="Malte Bach Hansen" /> */}
        </div>
        <div className="about__text">
          <p>
            I'm finishing an MSc in Digital Design &amp; Interactive Technologies
            at the IT University of Copenhagen, after a BSc in Medialogy at
            Aalborg University. Along the way I've worked across film
            production, game design and development, VR/AR, and animation —
            so I tend to approach digital design as something built and
            tested by hand, not just drawn. I'm a fast learner who likes
            group work and turning ambiguous problems into something concrete.
          </p>
          <ul className="about__skills">
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
