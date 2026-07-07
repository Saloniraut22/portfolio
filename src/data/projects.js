export const profile = {
  name: "Saloni Raut",
  title: "Product & UX Designer",
  tagline:
    "Designing thoughtful digital products grounded in user research, inclusive systems, and measurable outcomes.",
  location: "Bay Area, CA",
  email: "saloniraut1993@gmail.com",
  linkedIn: "https://www.linkedin.com/in/saloniraut22/",
  resume: "/resume/Saloni Raut Resume Latest.pdf",
};

export const projects = [
  {
    slug: "equal-lens",
    openAsPage: true,
    key: "aisunglasses",
    title: "Equal Lens",
    subtitle: "AR concept to reduce unconscious gender bias",
    category: "Product Design",
    duration: "3 Weeks",
    role: ["UI/UX Design", "User Research", "User Interview"],
    team: "3 People",
    tools: ["Figma", "Miro"],
    coverImage: "/image/AI Sunglasses/Cover.png",
    thumbnail: "/image/AI Sunglasses/Cover.png",
    metrics: [
      "33% women are interrupted more often in meetings",
      "60% of men receive more follow-up questions in mixed-gender conversations",
      "80% of workplace bias interventions happen after incidents instead of in real-time",
    ],
    sections: [
      {
        type: "overview",
        heading: "Summary",
        body: "Equal Lens is a human-centered design project focused on uncovering and addressing unconscious gender bias in professional interactions. Through contextual interviews and secondary research, we identified a recurring pattern where male-presenting participants receive more attention and responses, often unintentionally excluding women. We designed a low-fidelity AR concept that offers real-time prompts, attention cues, and post-session summaries to support more inclusive communication in customer-facing moments.",
      },
      {
        type: "problem",
        heading: "What problem am I trying to solve?",
        body: "In high-pressure service conversations, people can default to bias-driven communication habits without realizing it. The challenge was to design an assistive experience that helps professionals stay aware in the moment and rebalance engagement respectfully, without adding cognitive overload or disrupting natural conversation flow.",
      },
      {
        type: "list",
        heading: "Product Specifications",
        items: [
          "Real-time bias awareness with subtle focus indicators",
          "Memory and engagement support to remember names and context",
          "Conversation prompts to re-engage both participants equally",
          "Post-interaction summaries to encourage reflection and growth",
        ],
      },
      {
        type: "list",
        heading: "Key Learnings",
        items: [
          "Bias awareness alone is not enough; users need in-the-moment support",
          "Emotional labor is a major friction point in inclusive communication",
          "A supportive guidance system can improve confidence and consistency",
        ],
      },
    ],
    seamlessSlices: [
      "/image/AI Sunglasses/Slice 2.png",
      "/image/AI Sunglasses/Slice 3.png",
      "/image/AI Sunglasses/Slice 4.png",
      "/image/AI Sunglasses/Slice 5.png",
      "/image/AI Sunglasses/Slice 6.png",
      "/image/AI Sunglasses/Slice 7.png",
      "/image/AI Sunglasses/Slice 8.png",
      "/image/AI Sunglasses/Slice 9.png",
    ],
  },
  {
    slug: "airaware",
    openAsPage: true,
    key: "airaware",
    title: "AirAware",
    subtitle: "Personalized air quality decisions for people with asthma",
    category: "UI/UX Case Study",
    coverImage: "/image/airaware/cover.png",
    thumbnail: "/image/airaware/cover.png",
    role: ["UX Researcher", "Product Designer", "UI Designer"],
    duration: "Capstone / Thesis",
    team: "2 designers",
    tools: ["Figma", "Miro", "React Native", "Expo Go", "Cursor", "Gemini API"],
    sections: [],
  },
  {
    slug: "spendly",
    openAsPage: true,
    key: "spendly",
    title: "Spendly",
    subtitle: "AI-powered finance coach for young earners",
    category: "UI/UX Case Study",
    coverImage: "/image/Spendly/cover.png",
    thumbnail: "/image/Spendly/cover.png",
    role: ["UX Research", "UI/UX Design", "Product Management"],
    duration: "12 Weeks",
    sections: [
      {
        type: "overview",
        heading: "Overview",
        body: "Spendly is an AI-powered personal finance coach that helps young earners understand their spending and build better money habits without stress, spreadsheets, or math. The app turns confusing numbers into friendly, easy-to-read insights and small actionable steps that help users spend smarter, save consistently, and grow their confidence with money.",
      },
      {
        type: "problem",
        heading: "Problem",
        body: "Young people earning their first paychecks had no idea where their money was going. They spent impulsively and avoided finance apps because they felt overwhelming and guilt-inducing. The challenge was to design something that made money management feel simple, human, and calm — not like homework.",
      },
      {
        type: "list",
        heading: "Key Research Insights",
        items: [
          "People spend impulsively without tracking — \"I get my paycheck and it just disappears.\"",
          "Money management feels boring or stressful — budgeting apps induce guilt, not motivation",
          "Most users want clarity, not control — smart automatic insights over manual logging",
          "Motivation is emotional, not mathematical — encouragement outperforms warnings",
          "Young earners lack long-term perspective on how small savings compound over time",
        ],
      },
    ],
    seamlessSlices: [
      "/image/Spendly/IMG_0047.PNG",
      "/image/Spendly/IMG_0049.PNG",
      "/image/Spendly/IMG_0051.PNG",
      "/image/Spendly/IMG_0053.PNG",
      "/image/Spendly/IMG_0056.PNG",
      "/image/Spendly/IMG_0058.PNG",
      "/image/Spendly/IMG_0059.PNG",
      "/image/Spendly/IMG_0060.PNG",
      "/image/Spendly/IMG_0061.PNG",
      "/image/Spendly/service blueprint.jpg",
      "/image/Spendly/story board.png",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
