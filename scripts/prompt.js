function prompt() {
  let subjects = [
    "forest",
    "cityscape",
    "ocean",
    "outer space",
    "desert landscape",
    "fantasy kingdom",
    "cyberpunk city",
    "ancient ruins",
    "alien planet",
    "mystical forest",
    "vintage car",
    "futuristic skyline",
    "medieval castle",
    "robot assembly line",
    "enchanted lake",
    "haunted mansion"
  ];

  let details = [
    "filled with towering structures",
    "surrounded by mist and shadows",
    "under a sky full of stars",
    "with vibrant neon lights",
    "where the trees glow softly",
    "with mysterious symbols carved into stones",
    "beside a shimmering waterfall",
    "with steam rising from the ground",
    "covered in ancient hieroglyphs",
    "where futuristic machines are in action",
    "with colorful coral reefs",
    "with ruins that tell stories of the past",
    "under a purple sky with two moons",
    "where magical creatures roam",
    "surrounded by massive icebergs"
  ];

  let moods = [
    "eerie",
    "peaceful",
    "dramatic",
    "mysterious",
    "serene",
    "thrilling",
    "whimsical",
    "otherworldly",
    "vibrant",
    "dreamlike",
    "melancholic",
    "adventurous",
    "ethereal",
    "futuristic",
    "nostalgic"
  ];

  let nouns = [
    "a person looking into the distance",
    "a mysterious figure in a cloak",
    "a futuristic flying car zooming by",
    "a giant robotic creature",
    "an ancient stone statue",
    "a magical fox with glowing eyes",
    "a cyborg soldier standing guard",
    "a wise old wizard holding a staff",
    "a futuristic drone hovering nearby",
    "a lost astronaut",
    "a playful alien creature",
    "a floating crystal emitting light",
    "a majestic dragon soaring above",
    "a towering, abandoned robot",
    "a crazy dog with a mischievous grin"
  ];

  // Randomly pick elements from each array and combine them
  let subject = subjects[Math.floor(Math.random() * subjects.length)];
  let detail = details[Math.floor(Math.random() * details.length)];
  let mood = moods[Math.floor(Math.random() * moods.length)];
  let noun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${mood} ${subject} ${detail} with ${noun}`;
}

function styling() {
  let styles = [
    "photo",
    "digital art",
    "3d",
    "painting",
    "low-poly",
    "pixel-art",
    "anime",
    "cyberpunk",
    "comic",
    "vintage",
    "cartoon",
    "vector",
    "studio-shot",
    "dark",
    "sketch",
    "mockup",
    "2000s-pone",
    "70s-vibe",
    "watercolor",
    "art-nouveau",
    "origami",
    "fantasy",
    "traditional-japan",
    "surreal"
  ];

  let lightnings = [
    "studio",
    "warm",
    "cinematic",
    "volumetric",
    "golden-hour",
    "long-exposure",
    "cold",
    "iridescent",
    "dramatic",
    "hardlight",
    "redscale",
    "indoor-light"
  ];

  let framings = [
    "portrait",
    "macro",
    "panoramic",
    "aerial-view",
    "close-up",
    "cinematic",
    "high-angle",
    "low-angle",
    "symmetry",
    "fish-eye",
    "first-person"
  ];

  let colors = [
    "b&w",
    "pastel",
    "sepia",
    "dramatic",
    "vibrant",
    "orange&teal",
    "film-filter",
    "split",
    "electric",
    "pastel-pink",
    "gold-glow",
    "autumn",
    "muted-green",
    "deep-teal",
    "duotone",
    "terracotta&teal",
    "red&blue",
    "cold-neon",
    "burgundy&blue"
  ];

  let style = styles[Math.floor(Math.random() * styles.length)];
  let lightning = lightnings[Math.floor(Math.random() * lightnings.length)];
  let framing = framings[Math.floor(Math.random() * framings.length)];
  let color = colors[Math.floor(Math.random() * colors.length)];

  return {
    style,
    color,
    framing,
    lightning
  };
}

module.exports = { prompt, styling };
