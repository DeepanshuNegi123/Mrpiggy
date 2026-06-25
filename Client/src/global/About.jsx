import React from "react";

/* ============================================================
   FONTS — add this to your index.html <head>:

   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">

   ============================================================
   STATIC DATA — edit everything below this line.
   No need to touch the JSX further down to change content.
   ============================================================ */

const hero = {
  title: "Mr Piggy",
  subtitle: "Split bills. Settle up. Stay friends.",
};

const story = {
  eyebrow: "Our story",
  heading: "Built because someone always forgets who paid for dinner.",
  paragraphs: [
    "Mr Piggy started in 2021 after one too many group trips ended in a messy spreadsheet and an awkward 'so... who owes who?' conversation.",
    "So we built a place to track shared expenses, split them fairly, and settle up without the math headache or the awkwardness.",
  ],
};

const ledger = [
  { value: "2021", label: "Founded" },
  { value: "250,000+", label: "Expenses logged" },
  { value: "60,000+", label: "Accounts" },
  { value: "$8,200,000", label: "Settled between friends" },
];

const team = [
  {
    name: "Add Name",
    role: "Founder & CEO",
    image: "/team/placeholder-1.jpg",
  },
  {
    name: "Add Name",
    role: "Head of Product",
    image: "/team/placeholder-2.jpg",
  },
  {
    name: "Add Name",
    role: "Engineering Lead",
    image: "/team/placeholder-3.jpg",
  },
];

const values = [
  {
    title: "Fair to the cent",
    description: "Splits are calculated exactly. No rounding favors, no fights over who owes a dollar more.",
  },
  {
    title: "Settle, don't chase",
    description: "We turn an awkward conversation into a notification. No spreadsheet, no chasing IOUs.",
  },
  {
    title: "Your ledger, private",
    description: "We don't sell spending data. What your group owes each other stays between your group.",
  },
];

const cta = {
  heading: "Open your first tab.",
  buttonText: "Get started free",
  buttonHref: "#",
};

/* ============================================================
   DESIGN TOKENS
   ============================================================ */

const COCOA = "rgb(73,41,34)";
const PAPER = "#F4ECE0";
const COPPER = "#C97B4A";
const LEDGER_GREEN = "#3C6E5C";

const displayFont = { fontFamily: "'Fraunces', serif" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };
const numeralFont = { fontFamily: "'Space Mono', monospace" };

/* A literal wax-seal style coin mark, used once near the CTA */
const CoinSeal = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="36" r="34" stroke={COPPER} strokeWidth="2" />
    <circle cx="36" cy="36" r="27" stroke={COPPER} strokeWidth="1.5" strokeDasharray="2 3" />
    <text
      x="36"
      y="44"
      textAnchor="middle"
      fontSize="28"
      fill={COPPER}
      style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
    >
      ¢
    </text>
  </svg>
);

/* ============================================================
   COMPONENT — structure only, content comes from above
   ============================================================ */

export const About = () => {
  return (
    <div className="position-static" style={bodyFont}>
      {/* HERO */}
      <div className="min-h-screen p-2" style={{ backgroundColor: COCOA }}>
        <div className="h-full min-h-[calc(100vh-1rem)] flex flex-col justify-center items-center gap-5 px-6">
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ ...numeralFont, color: COPPER }}
          >
            Est. 2021 — Account No. 001
          </span>
          <h1
            className="text-white text-7xl md:text-9xl tracking-tight text-center"
            style={{ ...displayFont, fontWeight: 600, fontStyle: "italic" }}
          >
            {hero.title}
          </h1>
          <div className="w-24 h-px" style={{ backgroundColor: COPPER }} />
          <p className="text-white/70 text-lg md:text-xl text-center">
            {hero.subtitle}
          </p>
        </div>
      </div>

      {/* STORY */}
      <div className="px-6 md:px-8 py-20 md:py-28" style={{ backgroundColor: PAPER }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: COCOA, opacity: 0.55 }}
          >
            {story.eyebrow}
          </span>
          <h2
            className="text-3xl md:text-5xl mt-3 mb-8 leading-tight"
            style={{ ...displayFont, fontWeight: 600, color: COCOA }}
          >
            {story.heading}
          </h2>
          {story.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base md:text-lg leading-relaxed mb-4"
              style={{ color: COCOA, opacity: 0.8 }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* LEDGER STRIP — receipt-style line items instead of stat cards */}
      <div className="px-6 md:px-8 py-4" style={{ backgroundColor: COCOA }}>
        <div className="max-w-4xl mx-auto">
          {ledger.map((item, i) => (
            <div
              key={i}
              className="flex items-baseline justify-between py-5 border-b"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <span className="text-white/60 text-sm md:text-base uppercase tracking-wide">
                {item.label}
              </span>
              <span
                className="text-xl md:text-3xl"
                style={{ ...numeralFont, color: PAPER }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM — signature-line style instead of cards */}
      <div className="px-6 md:px-8 py-20 md:py-28" style={{ backgroundColor: PAPER }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-16 text-center"
            style={{ ...displayFont, fontWeight: 600, color: COCOA }}
          >
            The people behind the ledger
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {/* IMAGE SECTION — swap the src in the `team` array above */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mb-5"
                  style={{ border: `3px solid ${COCOA}1A`, backgroundColor: `${COCOA}0D` }}
                />
                <div
                  className="text-lg mb-1"
                  style={{ ...displayFont, fontWeight: 600, color: COCOA }}
                >
                  {member.name}
                </div>
                <div className="w-10 h-px mb-2" style={{ backgroundColor: COPPER }} />
                <div className="text-sm" style={{ color: COCOA, opacity: 0.6 }}>
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className="px-6 md:px-8 py-20 md:py-28" style={{ backgroundColor: COCOA }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <div key={i} className="pt-6" style={{ borderTop: `2px solid ${LEDGER_GREEN}` }}>
              <h3
                className="text-xl mb-3"
                style={{ ...displayFont, fontWeight: 600, color: PAPER }}
              >
                {v.title}
              </h3>
              <p className="leading-relaxed text-white/60">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-8 py-24 md:py-32 text-center" style={{ backgroundColor: PAPER }}>
        <div className="flex justify-center mb-8">
          <CoinSeal />
        </div>
        <h2
          className="text-4xl md:text-6xl mb-10"
          style={{ ...displayFont, fontWeight: 600, fontStyle: "italic", color: COCOA }}
        >
          {cta.heading}
        </h2>
        <a
          href={cta.buttonHref}
          className="inline-block px-9 py-4 rounded-sm transition-opacity hover:opacity-85"
          style={{ backgroundColor: COCOA, color: PAPER, ...numeralFont, letterSpacing: "0.05em" }}
        >
          {cta.buttonText.toUpperCase()}
        </a>
      </div>
    </div>
  );
};