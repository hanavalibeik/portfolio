export type ProjectCaption = {
  paragraphs: string[];
};

/**
 * Portfolio descriptions adapted from Hana's original social/project captions.
 * Social-only CTAs, hashtags and engagement prompts are intentionally omitted.
 */
export const projectCaptions: Record<string, ProjectCaption> = {
  "shokouh-miyami": {
    paragraphs: [
      "A visual identity for Shokouh Miyami, created for Iran Stone Co. The identity is built around the strength, precision and natural character of stone, using a geometric mark and a restrained visual system that can move from stationery to architectural applications.",
    ],
  },
  "pista-packaging": {
    paragraphs: [
      "Packaging design and illustration for Pista. The system brings the product itself to the center of each pack through warm illustrated compositions, while a consistent hierarchy keeps the different nut varieties connected as one recognizable family.",
    ],
  },
  "france-cafe": {
    paragraphs: [
      "A proposed logotype for France Café / France Pastry 1965. The Persian lettering was drawn as a continuous, flowing gesture and developed to remain distinctive across the main lockup, exterior signage and storefront applications.",
    ],
  },
  "codejudge-catalog": {
    paragraphs: [
      "Catalog and editorial design for Codejudge. The visual system uses modular layouts, diagrams, interface details and illustration to make an interactive assessment platform easier to understand and scan across print and digital presentations.",
    ],
  },
  "typographic-voice": {
    paragraphs: [
      "A personal motion-poster study exploring typography as part of the voice itself. The phrase “Amplify Your Words” grows out of the illustrated microphone, using movement, scale and direction to turn a static graphic into a short visual narrative.",
    ],
  },
  "a-minutes-silence": {
    paragraphs: [
      "A movie poster for A Minute's Silence, directed by Mohammad Pourriahi. The concept is built around the moment truth is revealed, using fractured typography, small human silhouettes and sharp beams of light to create a tense monochrome composition.",
    ],
  },
  sepidar: {
    paragraphs: [
      "Presenting the logotype design for Sepidar Art Center—where creativity meets education. This design reflects the essence of artistic expression while maintaining a structured, modern identity.",
      "A balance of typography and symbolism, capturing the spirit of an inspiring space for artists and learners alike.",
    ],
  },
  recke: {
    paragraphs: [
      "Poster design for the RECKE Food Processor campaign. The key visual turns the rising steam into the central graphic gesture, bringing the product, food and campaign message together in one atmospheric image.",
    ],
  },
  bennebon: {
    paragraphs: [
      "Inspired by sesame oil’s molecular structure, tradition, and the meticulous extraction process, the BenneBon logo weaves together science and art. The geometric forms mirror the integrity of natural ingredients, while the golden drop symbolizes the richness of pure sesame oil.",
    ],
  },
  "shiraz-day": {
    paragraphs: [
      "This illustration is part of a series created in collaboration with Catmap brand, where I explored the fusion of Persian alternative typography and minimalist illustration.",
      "Each piece in this series is based on the word “Shiraz”, abstracted into a symbolic visual language—where letters become landscapes, and calligraphy turns into composition.",
      "What started as a custom commission is now growing into a personal project I’m expanding independently, bringing this typographic-art concept into a broader series.",
    ],
  },
  "avicenna-tour": {
    paragraphs: [
      "Great design goes beyond aesthetics—it’s about crafting a visual language that resonates with the audience. For Avicenna Tour’s identity, every element was intentionally designed to reflect trust, sophistication, and a seamless blend of tradition and modernity.",
      "The deep teal and gold color palette establishes a sense of credibility and premium service, evoking both professionalism and warmth. The geometric patterns, inspired by Persian architecture, subtly bridge cultural heritage with contemporary design, reinforcing the brand’s authenticity. Minimalist icons and infographics create a clear and intuitive visual experience, ensuring that key messages are conveyed effortlessly. The carefully structured Instagram grid strengthens narrative cohesion, transforming scattered visuals into a seamless and engaging brand story.",
      "A well-crafted brand identity isn’t just seen—it’s felt. Every color, shape, and layout serves a purpose, building an experience that remains memorable.",
    ],
  },
  "mizan-gostar": {
    paragraphs: [
      "The innovative company Mizan Gostar Elm Va Danesh, relying on modern knowledge, technology, and the creativity of its young experts, began its activities in the fields of consulting, designing and implementing software systems, as well as training and educating skilled professionals for entry into the job market.",
      "The design is inspired by the essence of digital technology and innovation. The logo embraces circular forms to symbolize dynamism and fluidity. Thoughtfully crafted with subtle programming elements, it balances simplicity and memorability while creating a distinctive visual identity.",
    ],
  },
};

export function getProjectCaption(slug: string): ProjectCaption | undefined {
  return projectCaptions[slug];
}
