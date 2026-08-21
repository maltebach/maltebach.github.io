// Each project's `cover`/`gallery`/`video` are optional — when missing, the
// UI shows a placeholder tile instead. Fill these in as real photos become
// available for the other projects.
export const projects = [
  {
    id: "life-through-water",
    title: "Life Through Water",
    category: "Multisensory museum experience",
    tags: ["Spatial", "Exhibition", "Master's thesis"],
    description:
      "Life Through Water is an interactive museum installation about Nordhavn and the transformation of harbor baths through time. The project was part of my master's thesis in collaboration with the National Museum of Denmark, and features embodied interactions, multisensory cues and an engaging narrative. The installation is a shared experience for multiple people, and takes place inside a remodeled caravan designed with a sauna interior. It was exhibited as part of a larger exhibition, and is displayed around Copenhagen in 2026 and 2027.",
    cover: { src: "/assets/img/life-through-water/ltwFront1.png", alt: "The caravan installation exterior, painted with a Nordhavn map graphic" },
    gallery: [
      { src: "/assets/img/life-through-water/ltw1.jpg", alt: "Projected footage of a diver wrapping the interior walls of the caravan" },
      { src: "/assets/img/life-through-water/ltw2.jpg", alt: "Visitor interacting with a projected scene using a wooden object" },
      { src: "/assets/img/life-through-water/ltw5.jpg", alt: "Hourglass interaction" },
      { src: "/assets/img/life-through-water/ltwFront.jpg", alt: "The caravan installation exterior, painted with a Nordhavn map graphic" },
      { src: "/assets/img/life-through-water/ltw3.jpg", alt: "The caravan installation on-site as part of the exhibition" },
      { src: "/assets/img/life-through-water/ltw4.jpg", alt: "The Myths & Bricks info point sign next to the caravan" },
      
    ],
    video: { src: "/assets/video/life-through-water-trailer.mp4", poster: "/assets/img/ltwFront.jpg" },
  },
  {
    id: "touchless-map",
    title: "Touchless Map",
    category: "Gesture-based 3D map for indoor navigation",
    tags: ["3D", "Gesture", "Navigation"],
    description:
      "The purpose of this project was to answer if a touchless natural user interface (NUI) and hand motions provided a viable way of interacting with a 3D map. Based on research made on interfaces, gestures, and maps, the Final Problem Statement (FPS) was \"To what extent will a NUI, controlled by quantitative hand gestures, serve as a viable way of interacting with a public 3D map?\" Based on this FPS and the design requirements outlined in the report, a hand tracking system and an application were developed. Tests were performed to determine the validity of the system and the results point towards a somewhat neutral reception of the participants. The results generally showed, that our NUI and hand motions provided a viable way of interacting with a 3D map, to a limited extent above neutral. This leaves room for improvements to the different NUI elements, which could lead to making NUI a more viable way to control a 3D map with quantitative hand gestures.",
      cover: { src: "/assets/img/map/mapFront.jpg", alt: "The caravan installation exterior, painted with a Nordhavn map graphic" },
    gallery: [
      { src: "/assets/img/map/map1.png", alt: "Projected footage of a diver wrapping the interior walls of the caravan" },
      { src: "/assets/img/map/map2.png", alt: "Visitor interacting with a projected scene using a wooden object" },
      { src: "/assets/img/map/map3.png", alt: "The caravan installation on-site as part of the exhibition" },
    ],
  },
  {
    id: "karensminde",
    title: "Karens Minde",
    category: "Gesture-based interactive story",
    tags: ["Gesture", "Storytelling", "TouchDesigner"],
    description:
      "An immersive museum experience, designed as part of a school project. Using gesture-based interaction, sound design, historical imagery and AI-generated visuals, the installation puts visitors in the role of a deaf patient at Karens Minde, exploring the institution's history through an embodied and emotionally challenging experience. Built in TouchDesigner with MediaPipe, the project combines interaction design, storytelling and emerging technology to create a sensory connection to the past.",
      cover: { src: "/assets/img/karens/karensFront.jpg", alt: "The caravan installation exterior, painted with a Nordhavn map graphic" },
    gallery: [
      { src: "/assets/img/karens/karens1.jpg", alt: "Projected footage of a diver wrapping the interior walls of the caravan" },
      { src: "/assets/img/karens/karens2.jpg", alt: "Visitor interacting with a projected scene using a wooden object" },
      { src: "/assets/img/karens/karens3.jpg", alt: "The caravan installation on-site as part of the exhibition" },
    ],
  },
  {
    id: "decibel-defender",
    title: "DecibelDefender",
    category: "VR experience about hearing impairments",
    tags: ["VR", "Accessibility", "Health communication"],
    description:
      "This project explored how virtual reality can be used to raise awareness of hearing impairment and encourage healthier listening habits among concert and festival attendees. We designed a multiplayer VR experience that placed participants in a festival setting and simulated the experience of hearing impairment, using immersion and embodiment to create a more personal understanding of hearing health.\n\nThe experience was evaluated through pre- and post-tests and qualitative interviews, focusing on changes in knowledge, attitudes, and behavior. The results showed that VR was particularly effective in fostering empathy and positively influencing attitudes and behaviors, while improvements in factual knowledge were more limited. The project highlighted the potential of immersive experiences as a tool for health communication, while emphasizing the importance of balancing emotional engagement with clear educational content.",
  cover: { src: "/assets/img/decibel/decibelFront.jpg", alt: "The caravan installation exterior, painted with a Nordhavn map graphic" },
    gallery: [
      { src: "/assets/img/decibel/decibel1.jpg", alt: "Projected footage of a diver wrapping the interior walls of the caravan" },
      { src: "/assets/img/decibel/decibel2.jpg", alt: "Visitor interacting with a projected scene using a wooden object" },
      { src: "/assets/img/decibel/decibel3.jpg", alt: "The caravan installation on-site as part of the exhibition" },
    ],
    },
  {
    id: "the-playground",
    title: "The Playground",
    category: "Auditory and embodied AR experience",
    tags: ["AR", "Audio", "Embodied"],
    description:
      "The Playground is an interactive theatrical experience that uses auditory augmented reality to immerse participants in a dystopian playground soundscape. The project explored how spatial audio, soundscapes, and visual elements can work together to create engaging and immersive storytelling experiences.\n\nThrough research, prototyping, and user testing, we developed a proof-of-concept focused on a single participant's experience. The findings highlighted the potential of auditory AR for experimental theatre, while emphasizing the importance of combining spatialized audio with visual representations to strengthen immersion and narrative.",
  cover: { src: "/assets/img/AR/arFront.png", alt: "The caravan installation exterior, painted with a Nordhavn map graphic" },
    gallery: [
      { src: "/assets/img/AR/ar1.png", alt: "Projected footage of a diver wrapping the interior walls of the caravan" },
      { src: "/assets/img/AR/ar2.png", alt: "Visitor interacting with a projected scene using a wooden object" },
      { src: "/assets/img/AR/ar3.png", alt: "The caravan installation on-site as part of the exhibition" },
    ],
    },
  {
    id: "sea-savers",
    title: "Sea Savers",
    category: "Serious multiplayer game about plastic pollution",
    tags: ["Serious game", "Multiplayer", "Sustainability"],
    description:
      "This project explored how a serious game could raise awareness of plastic pollution and the UN Sustainable Development Goal Life Below Water. Based on user research with the target group of 16–21-year-olds, we developed a multiplayer game centred around the impact of plastic pollution on marine life.\n\nThe game was evaluated through qualitative user testing with 14 participants, focusing on awareness, knowledge retention, motivation, gameplay experience, and usability. While the game was successful in creating an entertaining multiplayer experience, the results showed that entertainment alone did not necessarily translate into increased knowledge or awareness of the issue.",
  cover: { src: "/assets/img/sea/seaFront.png", alt: "The caravan installation exterior, painted with a Nordhavn map graphic" },
    gallery: [
      { src: "/assets/img/sea/sea1.jpg", alt: "Projected footage of a diver wrapping the interior walls of the caravan" },
      { src: "/assets/img/sea/sea2.png", alt: "Visitor interacting with a projected scene using a wooden object" },
      { src: "/assets/img/sea/sea3.jpg", alt: "The caravan installation on-site as part of the exhibition" },
      { src: "/assets/img/sea/sea4.jpg", alt: "The caravan installation on-site as part of the exhibition" }, 
    ],
    },
];
