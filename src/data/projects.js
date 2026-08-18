// Real, filled-in projects. Each key is the id used to open its modal.
export const projects = {
  'life-through-water': {
    dims: 'MSc Thesis',
    category: 'MSc Thesis — with the National Museum of Denmark',
    title: 'Life Through Water',
    blurb: "Interactive museum installation on Nordhavn's harbor-bath history, with the National Museum of Denmark",
    description:
      "Life Through Water is an interactive museum installation about Nordhavn and the transformation of harbor baths through time. The project was part of my master's thesis in collaboration with the National Museum of Denmark, and features embodied interactions, multisensory cues and an engaging narrative. The installation is a shared experience for multiple people, and takes place inside a remodeled caravan designed with a sauna interior. It was exhibited as part of a larger exhibition, and will be displayed around Copenhagen for the next two years.",
    tags: ['Interaction Design', 'Exhibition Design', 'Embodied Interaction', 'Multisensory'],
    thumb: '/assets/img/life-through-water/front.jpg',
    thumbAlt: 'The Life Through Water caravan installation exterior',
    media: [
      { type: 'video', src: '/assets/video/life-through-water-trailer.mp4', poster: '/assets/img/life-through-water/front.jpg' },
      { type: 'image', src: '/assets/img/life-through-water/front.jpg', alt: 'The caravan installation exterior, painted with a Nordhavn map graphic' },
      { type: 'image', src: '/assets/img/life-through-water/screenshot-1.jpg', alt: 'Projected footage of a diver wrapping the interior walls of the caravan' },
      { type: 'image', src: '/assets/img/life-through-water/screenshot-2.jpg', alt: 'Visitor interacting with a projected scene using a wooden object' },
      { type: 'image', src: '/assets/img/life-through-water/screenshot-3.jpg', alt: 'The caravan installation on-site as part of the exhibition' },
      { type: 'image', src: '/assets/img/life-through-water/screenshot-4.jpg', alt: 'The Myths & Bricks info point sign next to the caravan' },
    ],
  },
}

// Still-empty slots — swap these out (or add data to `projects` above and
// reference the id here) as you fill out the rest of your work.
export const placeholders = [
  { dims: '375 × 812', color: '#D6E0FF', tags: ['Mobile', 'Branding'] },
  { dims: '1920 × 1080', color: '#FFE1D6', tags: ['Web Design', 'Design System'] },
  { dims: '1200 × 800', color: '#E4E4EC', tags: ['Illustration', 'Motion'] },
]
