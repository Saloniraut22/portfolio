import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const font = "Inter, sans-serif";
const blue = "#1A73E8";
const dark = "#08111E";

/* ─── primitives ──────────────────────────────────── */
function Section({ children, bg = "#fff", style = {}, id }) {
  return (
    <section id={id} style={{ background: bg, padding: "6rem 5%", ...style }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function SectionTitle({ children, color = "#08111E", size = "clamp(1.6rem,3.5vw,2.6rem)", accent = blue }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div style={{ width: 36, height: 3, background: accent, borderRadius: 2, marginBottom: "0.9rem" }} />
      <h2 style={{
        fontFamily: font, fontWeight: 800, fontSize: size,
        color, letterSpacing: "-0.03em", margin: 0, lineHeight: 1.15,
      }}>{children}</h2>
    </div>
  );
}

function Body({ children, color = "#444", size = "clamp(1rem,1.6vw,1.1rem)" }) {
  return (
    <p style={{
      fontFamily: font, fontWeight: 400, fontSize: size,
      lineHeight: 1.9, color, margin: "0 0 1rem",
    }}>{children}</p>
  );
}

function Label({ children, color = "#1A73E8" }) {
  return (
    <div style={{
      display: "inline-block", fontFamily: font, fontWeight: 700, fontSize: "0.72rem",
      letterSpacing: "0.12em", textTransform: "uppercase", color,
      background: `${color}12`, padding: "0.3rem 0.8rem", borderRadius: 40,
      marginBottom: "0.9rem",
    }}>{children}</div>
  );
}

function Tag({ children, bg = "#E8F0FE", color = "#1A73E8" }) {
  return (
    <span style={{
      fontFamily: font, fontSize: "0.8rem", fontWeight: 600,
      background: bg, color, padding: "0.3rem 0.9rem",
      borderRadius: 40, display: "inline-block",
    }}>{children}</span>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "rgba(0,0,0,0.06)", margin: "0" }} />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ─── data ────────────────────────────────────────── */
const META = [
  { label: "Role", value: "UX Researcher, Product Designer, UI Designer" },
  { label: "Team", value: "2 Designers" },
  { label: "Tools", value: "Figma · Miro · React Native · Expo Go · Cursor · Gemini API" },
  { label: "Timeline", value: "Thesis Project" },
];

const INSIGHTS = [
  { num: "01", title: "Users are reactive, not proactive", body: "Many users only think about air quality after they feel discomfort: coughing, heaviness, or breathing difficulty after entering a place." },
  { num: "02", title: "AQI numbers are hard to act on", body: "Users may understand that AQI is \"bad,\" but still not know whether they should cancel plans, change locations, or continue." },
  { num: "03", title: "Uncertainty in unfamiliar places", body: "People with asthma may avoid new locations because they do not know if the environment will feel safe." },
  { num: "04", title: "Social situations make health decisions harder", body: "People with asthma may follow group decisions even when a place is not ideal for their health." },
  { num: "05", title: "Users need guidance, not more data", body: "The biggest insight: users did not need more information. They needed clearer recommendations and confidence to act." },
];

const PERSONAS = [
  {
    name: "Nia", tag: "The Cautious Planner",
    color: "#E8F5E9", accent: "#2E7D32",
    body: "Moderate asthma. Thinks about air quality before making plans. Wants clear, reliable guidance before visiting unfamiliar places.",
  },
  {
    name: "Ryan", tag: "The Passive Planner",
    color: "#E3F2FD", accent: "#1565C0",
    body: "Mild asthma. Usually follows group plans. Only reacts when he feels discomfort. He needs low-effort guidance that fits naturally into his planning.",
  },
  {
    name: "Anaya", tag: "The Sensitive Planner",
    color: "#FCE4EC", accent: "#880E4F",
    body: "Severe asthma. Avoids unfamiliar places due to uncertainty about safety. Needs personalized, trustworthy information to feel confident in social activities.",
  },
];

const FEATURES = [
  { num: "01", title: "Personalized Onboarding", body: "Users enter sensitivity level, triggers, symptoms, and activity preferences so the system can personalize every recommendation." },
  { num: "02", title: "Home Dashboard", body: "Quick air quality status in simplified language (Safe, Caution, or High Risk) instead of overwhelming technical data." },
  { num: "03", title: "Place Recommendations", body: "Explore nearby places and see whether they are safe, cautionary, or high risk based on current air quality and personal sensitivity." },
  { num: "04", title: "Group Planning", body: "Create or join a group using a shared code. The system considers everyone's sensitivity and recommends places that work for the whole group." },
  { num: "05", title: "Public Groups / Social Visibility", body: "See groups associated with certain locations. This helps users feel more confident in unfamiliar places by seeing how others are engaging with the same environment." },
  { num: "06", title: "Recommendation Explanation", body: "Each recommendation includes a reason so users understand why a place is suggested or not, which improves trust and transparency." },
];

const ITERATIONS = [
  {
    step: "Iteration 1", title: "Indoor Monitoring",
    problem: "Users felt overwhelmed by too much data and continuous tracking.",
    learning: "More data does not always mean better support.",
    bg: "#F5F5F5",
  },
  {
    step: "Iteration 2", title: "Simplified Awareness",
    problem: "Users understood the information faster with Safe / Caution / High Risk labels.",
    learning: "Users still did not always know what action to take.",
    bg: "#E3F2FD",
  },
  {
    step: "Iteration 3: Final", title: "Contextual Decision Support",
    problem: "Shifted toward place-based recommendations and group decision-making.",
    learning: "Help users decide where to go based on air quality, personal sensitivity, and social context.",
    bg: "#E8F5E9",
  },
];

const DESIGN_DECISIONS = [
  { problem: "AQI numbers are technical and hard to interpret.", decision: "Use simple labels: Safe, Caution, High Risk.", why: "Users can understand the situation faster." },
  { problem: "Users with asthma have different triggers and sensitivities.", decision: "Create personalized onboarding and assessment.", why: "Recommendations become more relevant to each user." },
  { problem: "Many plans happen in groups.", decision: "Add private and public group features.", why: "The product supports real social decision-making, not only individual checking." },
  { problem: "Users may not trust recommendations without explanation.", decision: "Add short reasons behind each recommendation.", why: "Transparency increases confidence." },
];

const FINDINGS = [
  { num: "01", title: "Simple labels worked better than AQI numbers", body: "Users found Safe, Caution, and High Risk easier to understand than numerical AQI values." },
  { num: "02", title: "Place recommendations made the app more useful", body: "Users liked seeing air quality connected to real decisions, like choosing a café or park." },
  { num: "03", title: "Group features were valuable", body: "Users responded positively to recommendations based on shared sensitivities." },
  { num: "04", title: "Social visibility increased confidence", body: "Users felt more confident when they could see that others were connected to a location under similar conditions." },
  { num: "05", title: "Onboarding needed improvement", body: "Some users tried to skip the assessment and go directly to groups, showing onboarding needed to feel less restrictive." },
];

const NEXT_STEPS = [
  { title: "Improve data accuracy", body: "Use more localized air quality data and add factors like weather, pollen, humidity, and crowd density." },
  { title: "Improve personalization", body: "Allow the app to learn from user behavior over time." },
  { title: "Expand group features", body: "Make group planning more flexible and realistic." },
  { title: "Add optional detailed data", body: "Keep the main interface simple, but allow advanced users to view AQI details." },
  { title: "Conduct long-term testing", body: "Study whether users actually change behavior over time." },
];

/* ─── component ───────────────────────────────────── */
export default function AirAwarePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AirAware — Saloni Raut";
    return () => { document.title = "Saloni Raut"; };
  }, []);

  const goBack = () => {
    navigate("/");
    setTimeout(() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: font }}>

      {/* back button */}
      <button onClick={goBack} style={{
        position: "fixed", top: 24, left: 24, zIndex: 100,
        background: "rgba(0,0,0,0.7)", border: "none", color: "#fff",
        fontFamily: font, fontWeight: 500, fontSize: "0.85rem",
        letterSpacing: "0.04em", padding: "0.5rem 1.1rem",
        borderRadius: 40, cursor: "pointer", backdropFilter: "blur(10px)",
      }}>← Back</button>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <div style={{ position: "relative", width: "100%", height: "clamp(420px,65vh,740px)", overflow: "hidden" }}>
        <img src="/image/airaware/cover.png" alt="AirAware cover"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "blur(6px)", transform: "scale(1.05)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.1) 60%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "4rem 5%" }}>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <h1 style={{
              fontFamily: font, fontWeight: 900, fontSize: "clamp(3rem,9vw,7rem)",
              letterSpacing: "-0.04em", color: "#fff", lineHeight: "90%", margin: "0 0 1.5rem",
            }}>AirAware</h1>
            <p style={{
              fontFamily: font, fontWeight: 300, fontSize: "clamp(1rem,2vw,1.4rem)",
              color: "rgba(255,255,255,0.75)", maxWidth: 680, lineHeight: 1.6,
            }}>
              A personalized air quality decision-support app that transforms complex AQI data
              into simple, actionable recommendations for people with asthma.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ══ META ══════════════════════════════════════════════ */}
      <div style={{ background: "#F0F4FF", borderBottom: `3px solid ${blue}18` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 5%",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2.5rem" }}>
          {META.map(m => (
            <div key={m.label}>
              <div style={{ fontFamily: font, fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em",
                textTransform: "uppercase", color: blue, marginBottom: "0.4rem" }}>{m.label}</div>
              <div style={{ fontFamily: font, fontWeight: 500, fontSize: "0.95rem", color: dark, lineHeight: 1.5 }}>{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* ══ OVERVIEW ══════════════════════════════════════════ */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }} className="two-col-grid">
          <div>
            <SectionTitle>Project Overview</SectionTitle>
          </div>
          <div>
            <Body>
              AirAware is a mobile app designed to help people with asthma make more confident decisions about visiting public places like cafés, parks, workplaces, and shared spaces. Instead of showing technical AQI numbers, AirAware translates air quality data into simple guidance: Safe, Caution, and High Risk.
            </Body>
            <Body>
              The app combines real-time air quality data, personal asthma sensitivity, and social context to recommend places that are safer and more suitable. The final prototype was developed through a user-centered design process that included research, prototyping, usability testing, and iteration.
            </Body>
          </div>
        </div>
      </Section>

      <Divider />

      {/* ══ THE PROBLEM ═══════════════════════════════════════ */}
      <section style={{ background: `linear-gradient(135deg, ${dark} 0%, #0a2240 100%)`, padding: "6rem 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Label color="#64B5F6">The Problem</Label>
            <h2 style={{
              fontFamily: font, fontWeight: 800, fontSize: "clamp(1.8rem,4vw,3.2rem)",
              color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.2, maxWidth: 820, marginBottom: "3rem", marginTop: "0.5rem",
            }}>
              People with asthma know air quality matters.<br />They just don't know what to do about it.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }} className="two-col-grid">
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: "2rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: font, fontSize: "0.75rem", fontWeight: 700, color: "#90CAF9", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>What tools say</div>
                <div style={{ fontFamily: font, fontSize: "clamp(1.4rem,2.5vw,2.2rem)", color: "rgba(255,255,255,0.4)", fontStyle: "italic", lineHeight: 1.3 }}>"AQI is 145."</div>
              </div>
              <div style={{ background: "rgba(26,115,232,0.15)", borderRadius: 16, padding: "2rem", border: "1px solid rgba(26,115,232,0.3)" }}>
                <div style={{ fontFamily: font, fontSize: "0.75rem", fontWeight: 700, color: "#81C784", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>What users need</div>
                <div style={{ fontFamily: font, fontSize: "clamp(1.4rem,2.5vw,2.2rem)", color: "#fff", fontStyle: "italic", lineHeight: 1.3 }}>"Is this place safe for me right now?"</div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2.5rem" }}>
              <Body color="rgba(255,255,255,0.65)">
                Our research showed users often think about air quality only after they feel discomfort. They enter a place, start coughing, or feel tightness before realizing the environment may not be good for them. Their behavior is reactive, not preventive. AirAware solves this by helping users make decisions before they enter a space.
              </Body>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ EXISTING SOLUTIONS + GAP ══════════════════════════ */}
      <Section bg="#F8FAFB">
        <SectionTitle>What Already Exists</SectionTitle>
        <Body>
          Before jumping into designing, we looked at what people with asthma are already using. There are good tools out there, but none of them quite answer the question users actually have.
        </Body>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", margin: "2rem 0 2.5rem" }}>
          {[
            {
              title: "Air quality apps",
              eg: "AirNow, IQAir",
              pro: "They show real-time AQI, forecasts, and maps really well.",
              gap: "But they stop there. You still have to figure out what the number means for your body and your plans.",
            },
            {
              title: "Asthma & health resources",
              eg: "EPA, CDC, education sites",
              pro: "Great for understanding triggers and building general awareness.",
              gap: "The advice is too broad to be useful in the moment. They don't know you're standing outside a coffee shop right now.",
            },
            {
              title: "Indoor air monitors",
              eg: "Awair, Airthings",
              pro: "Excellent for monitoring your home or office space.",
              gap: "They need physical hardware and only work in controlled environments, so they're not helpful when you're out and about.",
            },
          ].map((item, i) => (
            <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ background: "#fff", borderRadius: 16, padding: "2rem", border: "1px solid rgba(0,0,0,0.07)" }}>
              <div style={{ fontFamily: font, fontWeight: 700, fontSize: "0.97rem", color: dark, marginBottom: "0.25rem" }}>{item.title}</div>
              <div style={{ fontFamily: font, fontSize: "0.8rem", color: "#999", marginBottom: "1.25rem" }}>{item.eg}</div>
              <div style={{ fontFamily: font, fontSize: "0.93rem", color: "#2E7D32", lineHeight: 1.65, marginBottom: "0.75rem" }}>
                <span style={{ fontWeight: 600 }}>What works: </span>{item.pro}
              </div>
              <div style={{ fontFamily: font, fontSize: "0.93rem", color: "#B71C1C", lineHeight: 1.65 }}>
                <span style={{ fontWeight: 600 }}>Where it falls short: </span>{item.gap}
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ background: "#FFF8F0", borderRadius: 16, padding: "2rem 2.5rem", borderLeft: "4px solid #F57C00" }}>
          <div style={{ fontFamily: font, fontWeight: 700, fontSize: "1rem", color: "#E65100", marginBottom: "1rem" }}>
            So what's missing?
          </div>
          <Body color="#555" size="0.95rem">
            None of these tools answer the real question: "Should I go here today?" They're missing personalization for individual sensitivity, place-based recommendations, and any sense of group decision-making. That's the gap AirAware is designed to fill.
          </Body>
        </div>
      </Section>

      <Divider />

      {/* ══ RESEARCH PROCESS ══════════════════════════════════ */}
      <Section>
        <SectionTitle>Research</SectionTitle>
        <Body>
          We used a user-centered design process that included secondary research, informal interviews, user discussions, competitive analysis, persona development, wireframing, prototyping, usability testing, and iteration. Participants included people with asthma or respiratory sensitivities, as well as general users involved in shared decision-making.
        </Body>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2.5rem" }}>
          {[
            {
              title: "Secondary Research",
              color: "#E3F2FD", accent: "#1565C0",
              points: [
                "Reviewed literature on air quality perception and health decision-making",
                "Analyzed how non-expert users interpret environmental health data",
                "Studied behavioral patterns around reactive vs. preventive health decisions",
              ],
            },
            {
              title: "Interviews",
              color: "#E8F5E9", accent: "#2E7D32",
              points: [
                "Spoke with people who have asthma or respiratory sensitivities",
                "Explored how participants currently check air quality and make plans",
                "Uncovered emotional friction around group outings and unfamiliar places",
              ],
            },
            {
              title: "Competitive Analysis",
              color: "#FFF3E0", accent: "#E65100",
              points: [
                "Evaluated AirNow, IQAir, EPA resources, Awair, and Airthings",
                "Mapped what each product does well and where it leaves users without action",
                "Identified the gap: no product bridges air quality data with place-specific decisions",
              ],
            },
          ].map((r, i) => (
            <motion.div key={r.title} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ background: r.color, borderRadius: 16, padding: "2rem", border: `1px solid ${r.accent}22` }}>
              <div style={{ fontFamily: font, fontWeight: 800, fontSize: "1rem", color: r.accent, marginBottom: "1.25rem", letterSpacing: "0.02em" }}>{r.title}</div>
              {r.points.map((pt, j) => (
                <div key={j} style={{ fontFamily: font, fontSize: "0.93rem", color: "#333", lineHeight: 1.65, marginBottom: "0.6rem" }}>• {pt}</div>
              ))}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ RESEARCH INSIGHTS ═════════════════════════════════ */}
      <Section bg="#F8FAFF">
        <SectionTitle>Key Research Insights</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {INSIGHTS.map((ins, i) => (
            <motion.div key={ins.num} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              style={{ display: "grid", gridTemplateColumns: "4.5rem 1fr", gap: "1.5rem", alignItems: "start",
                background: "#fff", borderRadius: 14, padding: "1.75rem 2rem",
                border: "1px solid rgba(26,115,232,0.1)",
                boxShadow: "0 2px 12px rgba(26,115,232,0.05)" }}>
              <div style={{ fontFamily: font, fontWeight: 900, fontSize: "1.8rem", color: blue,
                letterSpacing: "-0.05em", lineHeight: 1, paddingTop: "0.15rem" }}>{ins.num}</div>
              <div>
                <div style={{ fontFamily: font, fontWeight: 700, fontSize: "1rem", color: dark, marginBottom: "0.4rem" }}>{ins.title}</div>
                <Body size="0.93rem" color="#555">{ins.body}</Body>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ PERSONAS ══════════════════════════════════════════ */}
      <Section>
        <SectionTitle>Personas</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {PERSONAS.map((p, i) => (
            <motion.div key={p.name} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ background: "#fff", borderRadius: 20, padding: "2rem",
                border: `1.5px solid ${p.accent}30`,
                boxShadow: `0 8px 32px ${p.accent}12` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                {p.name === "Nia" ? (
                  <img src="/image/airaware/persona-nia.png" alt="Nia"
                    style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover",
                      flexShrink: 0, border: `2px solid ${p.accent}40` }} />
                ) : p.name === "Anaya" ? (
                  <img src="/image/airaware/persona-anaya.png" alt="Anaya"
                    style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover",
                      flexShrink: 0, border: `2px solid ${p.accent}40` }} />
                ) : (
                  <img src="/image/airaware/persona-ryan.png" alt="Ryan"
                    style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover",
                      flexShrink: 0, border: `2px solid ${p.accent}40` }} />
                )}
                <div>
                  <div style={{ fontFamily: font, fontWeight: 800, fontSize: "1.3rem", color: dark }}>{p.name}</div>
                  <Tag bg={`${p.accent}14`} color={p.accent}>{p.tag}</Tag>
                </div>
              </div>
              <Body size="0.95rem" color="#555">{p.body}</Body>
            </motion.div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ══ DESIGN OPPORTUNITY ════════════════════════════════ */}
      <section style={{ background: `linear-gradient(135deg, #0a1628 0%, #0d2a4a 60%, #0a2020 100%)`, padding: "7rem 5%" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <Label color="#64B5F6">Design Opportunity</Label>
          <blockquote style={{
            fontFamily: font, fontWeight: 300, fontSize: "clamp(1.4rem,3vw,2.2rem)",
            color: "#fff", lineHeight: 1.7, margin: "1.5rem 0 2.5rem", fontStyle: "italic",
          }}>
            "How might we help people with asthma confidently choose safer places by translating
            air quality data into simple, personalized, and actionable recommendations?"
          </blockquote>
          <div style={{ width: 60, height: 2, background: `${blue}80`, margin: "0 auto 2rem" }} />
          <Body color="rgba(255,255,255,0.6)" size="1rem">
            This reframed the project from an air monitoring tool into a decision-support system, focusing less on showing complex data and more on helping users make confident decisions.
          </Body>
        </div>
      </section>

      {/* ══ CORE FEATURES ═════════════════════════════════════ */}
      <Section bg="#F8FAFF">
        <SectionTitle>Core Features</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {FEATURES.map((f, i) => (
            <motion.div key={f.num} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ background: "#fff", borderRadius: 18, padding: "1.75rem 2rem",
                border: "1px solid rgba(26,115,232,0.1)",
                boxShadow: "0 2px 16px rgba(26,115,232,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: `${blue}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: font, fontWeight: 800, fontSize: "0.85rem", color: blue }}>{f.num}</div>
                <div style={{ fontFamily: font, fontWeight: 700, fontSize: "0.97rem", color: dark }}>{f.title}</div>
              </div>
              <Body size="0.92rem" color="#555">{f.body}</Body>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ DESIGN GOALS ══════════════════════════════════════ */}
      <Section>
        <SectionTitle>Design Goals</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
          {[
            { num: "1", title: "Simplify air quality information", body: "Use clear categories (Safe, Caution, High Risk) instead of raw AQI numbers that users can't act on." },
            { num: "2", title: "Support personal asthma needs", body: "Let users enter sensitivity level, triggers, and preferences so recommendations feel relevant to their body." },
            { num: "3", title: "Recommend places, not just data", body: "Connect air quality to real-world destinations so users can decide where to go, not just what the air is like." },
            { num: "4", title: "Support group decisions", body: "Enable group planning so recommendations consider everyone's sensitivity, not just the individual." },
            { num: "5", title: "Reduce cognitive effort", body: "Keep the interface simple, clear, and easy to scan so users can make fast, confident decisions." },
          ].map((g, i) => (
            <motion.div key={g.num} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ background: "#F8FAFB", borderRadius: 16, padding: "1.75rem", border: "1px solid rgba(0,0,0,0.07)", borderTop: "3px solid #1565C0" }}>
              <div style={{ fontFamily: font, fontWeight: 800, fontSize: "1.8rem", color: "#E3F2FD", marginBottom: "0.5rem" }}>{g.num}</div>
              <div style={{ fontFamily: font, fontWeight: 700, fontSize: "0.95rem", color: "#0a0a0a", marginBottom: "0.5rem" }}>{g.title}</div>
              <Body size="0.9rem" color="#555">{g.body}</Body>
            </motion.div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ══ ITERATION STORY ═══════════════════════════════════ */}
      <Section>
        <SectionTitle>Iteration Story</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {ITERATIONS.map((it, i) => (
            <motion.div key={it.step} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ display: "grid", gridTemplateColumns: "3.5rem 1fr", gap: "0", alignItems: "stretch" }}>
              {/* timeline */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%",
                  background: i === 2 ? blue : "#fff", border: `2px solid ${i === 2 ? blue : "#dde3ee"}`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  fontFamily: font, fontWeight: 800, fontSize: "0.8rem", color: i === 2 ? "#fff" : "#888",
                  zIndex: 1 }}>{i + 1}</div>
                {i < 2 && <div style={{ width: 2, flex: 1, background: "#dde3ee", margin: "4px 0" }} />}
              </div>
              {/* content */}
              <div style={{ background: it.bg, borderRadius: 16, padding: "1.75rem 2rem", marginLeft: "1rem",
                marginBottom: i < 2 ? "1rem" : 0, border: i === 2 ? `1.5px solid ${blue}30` : "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ fontFamily: font, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.12em",
                  textTransform: "uppercase", color: i === 2 ? blue : "#999", marginBottom: "0.3rem" }}>{it.step}</div>
                <div style={{ fontFamily: font, fontWeight: 800, fontSize: "1.05rem", color: dark, marginBottom: "1rem" }}>{it.title}</div>
                <div style={{ fontFamily: font, fontSize: "0.92rem", color: "#B71C1C", lineHeight: 1.65, marginBottom: "0.5rem",
                  background: "rgba(183,28,28,0.05)", borderRadius: 8, padding: "0.6rem 0.9rem" }}>
                  <strong>Problem:</strong> {it.problem}
                </div>
                <div style={{ fontFamily: font, fontSize: "0.92rem", color: "#1B5E20", lineHeight: 1.65,
                  background: "rgba(27,94,32,0.05)", borderRadius: 8, padding: "0.6rem 0.9rem" }}>
                  <strong>Learning:</strong> {it.learning}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ INFORMATION ARCHITECTURE ══════════════════════════ */}
      <Section>
        <SectionTitle>Information Architecture</SectionTitle>
        <Body>
          The app is organized around five major areas: Home, Explore, Groups, Notifications, and Profile. The structure supports a simple flow: understand current conditions, personalize your needs, explore places, and decide individually or with a group.
        </Body>
        <div style={{ marginTop: "2rem" }}>
          <img src="/image/airaware/ia-diagram.png" alt="AirAware Information Architecture"
            style={{ width: "100%", maxWidth: 512, display: "block", margin: "0 auto", borderRadius: 12 }} />
        </div>
      </Section>

      <Divider />

      {/* ══ USER FLOW ═════════════════════════════════════════ */}
      <Section bg="#F8FAFB">
        <SectionTitle>User Flow</SectionTitle>
        <Body>
          The main flow guides users from onboarding through to a confident destination decision. The flow splits into two paths: an individual decision path (personal sensitivity → explore recommendations → decide) and a group path (create or join a group → shared recommendations → decide together).
        </Body>
        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <img src="/image/airaware/user-flow.png" alt="AirAware User Flow Diagram"
            style={{ width: "500px", display: "block", borderRadius: 12 }} />
        </div>
      </Section>


      <Divider />

      {/* ══ FINAL UI ══════════════════════════════════════════ */}
      <section style={{ background: "#0A0F1C", padding: "6rem 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionTitle color="#fff" accent="#64B5F6">Final UI</SectionTitle>
        <Body color="rgba(255,255,255,0.55)">The final high-fidelity prototype covers the full user journey, from splash and onboarding through home, assessment, group planning, and place recommendations.</Body>

        {/* helper: a row of phone screenshots */}
        {[
          {
            label: "Splash Screen",
            desc: "The splash screen introduces AirAware, a system designed to support informed decisions based on air quality and personal sensitivity.",
            imgs: ["7.png"],
            cols: 1,
          },
          {
            label: "Walkthroughs",
            desc: "The walkthroughs explain what the app does and how users interact with it.",
            imgs: ["8.png", "9.png", "10.png"],
            cols: 3,
          },
          {
            label: "Login",
            desc: "The login screen provides secure access to a personalized experience.",
            imgs: ["11.png"],
            cols: 1,
          },
          {
            label: "Sign-Up Screens",
            desc: "The sign-up flow collects basic asthma-related information to personalize recommendations.",
            imgs: ["12.png", "13.png", "14.png", "15.png", "16.png", "17.png"],
            cols: 3,
          },
          {
            label: "Home Screen",
            desc: "The home screen presents real-time air quality, supporting details, and guidance to help users interpret current conditions.",
            imgs: ["18.png", "19.png"],
            cols: 2,
          },
          {
            label: "Assessment Screens",
            desc: "The assessment screens collect detailed information about the user's asthma: symptoms, triggers, and activity levels.",
            imgs: ["20.png", "21.png", "22.png", "23.png", "24.png"],
            cols: 3,
          },
          {
            label: "Public Groups",
            desc: "The public groups screen displays existing groups based on current conditions. Users can explore groups that align with similar sensitivities and join one that fits their needs.",
            imgs: ["25.png", "26.png", "27.png"],
            cols: 3,
          },
          {
            label: "Create Group",
            desc: "The create group screen lets users set up their own group, define basic details, and generate a unique code to invite others. This enables shared planning around group sensitivities.",
            imgs: ["28.png", "29.png", "30.png", "31.png"],
            cols: 2,
          },
          {
            label: "Recommendations",
            desc: "The recommendation screen presents suggested places based on current air quality and the group's sensitivity, with a suitability level, environmental details, and a brief explanation.",
            imgs: ["32.png", "33.png", "34.png"],
            cols: 3,
          },
        ].map((group, gi) => (
          <motion.div key={group.label} variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} style={{ marginBottom: "4rem" }}>
            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ display: "inline-block", fontFamily: font, fontWeight: 700, fontSize: "0.72rem",
                letterSpacing: "0.12em", textTransform: "uppercase", color: "#64B5F6",
                background: "rgba(100,181,246,0.12)", padding: "0.3rem 0.8rem", borderRadius: 40,
                marginBottom: "0.6rem" }}>{group.label}</div>
              <div style={{ fontFamily: font, fontSize: "0.92rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{group.desc}</div>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${group.cols}, 1fr)`,
              gap: "1.25rem",
              justifyItems: group.imgs.length === 1 ? "center" : "stretch",
            }}>
              {group.imgs.map(img => (
                <div key={img} style={{
                  borderRadius: 22, overflow: "hidden",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
                  maxWidth: group.imgs.length === 1 ? 360 : "100%",
                }}>
                  <img
                    src={`/image/Airaware App/${img}`}
                    alt={`${group.label} — screen`}
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        </div>
      </section>

      {/* ══ DESIGN DECISIONS ══════════════════════════════════ */}
      <Section>
        <SectionTitle>Why These Design Decisions Matter</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#0D1B2A", padding: "1rem 2rem", gap: "2rem" }}>
            {["Problem", "Design Decision", "Why It Works"].map(h => (
              <div key={h} style={{ fontFamily: font, fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#64B5F6" }}>{h}</div>
            ))}
          </div>
          {DESIGN_DECISIONS.map((d, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem",
                background: i % 2 === 0 ? "#fff" : "#F8FAFB", padding: "1.5rem 2rem" }}>
              <Body size="0.95rem" color="#555">{d.problem}</Body>
              <Body size="0.95rem" color="#0a0a0a">{d.decision}</Body>
              <Body size="0.95rem" color="#2E7D32">{d.why}</Body>
            </motion.div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ══ TESTING + FINDINGS ════════════════════════════════ */}
      <Section bg="#F8FAFF">
        <SectionTitle>Usability Testing & Findings</SectionTitle>
        <Body>
          We tested the final prototype with users who had asthma or respiratory sensitivities, as well as general users. Participants completed tasks such as checking air quality, exploring recommended places, using group features, and deciding whether to visit certain locations.
        </Body>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "2.5rem" }}>
          {FINDINGS.map((f, i) => (
            <motion.div key={f.num} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              style={{ display: "grid", gridTemplateColumns: "3.5rem 1fr", gap: "1.25rem", alignItems: "start",
                background: "#fff", borderRadius: 14, padding: "1.5rem 2rem",
                border: "1px solid rgba(26,115,232,0.1)",
                boxShadow: "0 2px 12px rgba(26,115,232,0.04)",
                borderLeft: `3px solid ${blue}` }}>
              <div style={{ fontFamily: font, fontWeight: 900, fontSize: "1.5rem", color: blue, letterSpacing: "-0.05em" }}>{f.num}</div>
              <div>
                <div style={{ fontFamily: font, fontWeight: 700, fontSize: "0.97rem", color: dark, marginBottom: "0.3rem" }}>{f.title}</div>
                <Body size="0.92rem" color="#555">{f.body}</Body>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ DESIGN IMPROVEMENTS ═══════════════════════════════ */}
      <Section>
        <SectionTitle>Design Improvements After Testing</SectionTitle>
        <Body>Testing directly shaped the final design. Here are the key before/after changes made based on user feedback.</Body>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", marginTop: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#0D1B2A", padding: "1rem 2rem", gap: "2rem" }}>
            {["Area", "Before", "After"].map(h => (
              <div key={h} style={{ fontFamily: font, fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#64B5F6" }}>{h}</div>
            ))}
          </div>
          {[
            { area: "Onboarding", before: "Felt restrictive. Users tried to skip assessment and go straight to groups.", after: "Made more guided with a clear explanation of why it matters, which unlocks better recommendations." },
            { area: "Location context", before: "Recommendations shifted inconsistently as users moved within an area", after: "Refined location behavior so recommendations stay consistent during exploration" },
            { area: "General profile option", before: "Some users selected \"general\" profile to bypass the assessment", after: "Limited the general profile option to preserve personalization quality" },
            { area: "Data depth", before: "All users saw the same simplified view with no option for more detail", after: "Added optional AQI detail toggle for users who want deeper information" },
          ].map((row, i) => (
            <div key={row.area} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem",
              background: i % 2 === 0 ? "#fff" : "#F8FAFB", padding: "1.5rem 2rem", alignItems: "start" }}>
              <div style={{ fontFamily: font, fontWeight: 700, fontSize: "0.93rem", color: "#0a0a0a" }}>{row.area}</div>
              <div style={{ fontFamily: font, fontSize: "0.92rem", color: "#C62828", lineHeight: 1.6 }}>{row.before}</div>
              <div style={{ fontFamily: font, fontSize: "0.92rem", color: "#2E7D32", lineHeight: 1.6 }}>{row.after}</div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ══ IMPACT ════════════════════════════════════════════ */}
      <section style={{ background: `linear-gradient(135deg, ${dark} 0%, #0a2240 100%)`, padding: "6rem 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Label color="#64B5F6">Impact</Label>
          <h2 style={{
            fontFamily: font, fontWeight: 800, fontSize: "clamp(1.8rem,4vw,3rem)",
            color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.25, marginBottom: "3rem", maxWidth: 800, marginTop: "0.5rem",
          }}>
            AirAware helped shift the experience from "checking air quality" to "making a confident decision."
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[
              "Users understood air quality faster through simplified labels",
              "Place-based recommendations were more useful than raw data",
              "Group decision-making helped include multiple health needs",
              "Social context increased confidence in unfamiliar places",
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(26,115,232,0.1)", borderRadius: 14, padding: "1.5rem",
                border: "1px solid rgba(26,115,232,0.2)", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#4CAF50",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.1rem",
                  fontSize: "0.65rem", color: "#fff", fontWeight: 900 }}>✓</div>
                <div style={{ fontFamily: font, fontSize: "0.93rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.65 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LIMITATIONS ═══════════════════════════════════════ */}
      <Section>
        <SectionTitle>Limitations</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {[
            "Prototype uses city-level air quality data, which may not reflect exact location conditions",
            "Group features are limited in prototype form",
            "Recommendation logic is rule-based and does not yet learn from long-term user behavior",
            "No full backend for real-time multi-user interaction",
            "Testing was small-scale and short-term",
          ].map((l, i) => (
            <div key={i} style={{ background: "#FFF8E1", borderRadius: 12, padding: "1.25rem 1.5rem", borderLeft: "3px solid #FFA000" }}>
              <Body size="0.93rem" color="#555">{l}</Body>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ══ WHAT I LEARNED ════════════════════════════════════ */}
      <Section bg="#F8FAFF">
        <SectionTitle>What I Learned</SectionTitle>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr clamp(280px, 42%, 480px)",
          gap: "3.5rem",
          alignItems: "center",
        }}>
          {/* Paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(0.95rem,1.5vw,1.05rem)",
              lineHeight: 1.85, color: "#444", margin: 0 }}>
              AirAware taught me how to turn a complex health and environmental problem into a clear product experience. I learned that users do not need more data, they need the right information at the right moment to make confident decisions.
            </p>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(0.95rem,1.5vw,1.05rem)",
              lineHeight: 1.85, color: "#444", margin: 0 }}>
              Through research and testing, I shifted the design from simply showing air quality data to helping users answer a more useful question: "Is this place safe for me?" This pushed me to design clearer risk labels, personalized recommendations, and group decision-making features.
            </p>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(0.95rem,1.5vw,1.05rem)",
              lineHeight: 1.85, color: "#444", margin: 0 }}>
              This project strengthened my ability to connect user research to product strategy, simplify complex systems, and make intentional design decisions that support real user needs.
            </p>
          </div>

          {/* Photo — 3D tilt on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ perspective: 900 }}
          >
            <motion.div
              whileHover={{ rotateY: -8, rotateX: 4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              style={{
                borderRadius: 20, overflow: "hidden", background: "#f5f0eb",
                boxShadow: "0 20px 60px rgba(26,115,232,0.12), 0 4px 16px rgba(0,0,0,0.08)",
                transformStyle: "preserve-3d",
                willChange: "transform",
                position: "relative",
              }}
            >
              <img
                src="/image/airaware/reflection.png"
                alt="AirAware thesis presentation"
                style={{ width: "100%", display: "block", objectFit: "contain" }}
              />
              {/* Shine overlay */}
              <motion.div
                style={{
                  position: "absolute", inset: 0, borderRadius: 20,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ══ VIDEO DEMO ════════════════════════════════════════ */}
      <Section bg={dark} id="app-demo">
        <SectionTitle color="#fff">App Demo</SectionTitle>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* iPhone 16 Pro shell */}
          <div style={{
            position: "relative",
            width: 320,
            aspectRatio: "393/852",
            background: "#1a1a1a",
            borderRadius: 52,
            boxShadow: "0 0 0 2px #2a2a2a, 0 0 0 4px #111, 0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)",
            padding: "14px 10px",
            boxSizing: "border-box",
          }}>
            {/* Dynamic Island */}
            <div style={{
              position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
              width: 120, height: 34, background: "#0a0a0a",
              borderRadius: 20, zIndex: 3,
            }} />
            {/* Side buttons left */}
            <div style={{ position: "absolute", left: -3, top: "18%", width: 3, height: 32, background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
            <div style={{ position: "absolute", left: -3, top: "27%", width: 3, height: 56, background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
            <div style={{ position: "absolute", left: -3, top: "38%", width: 3, height: 56, background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
            {/* Side button right */}
            <div style={{ position: "absolute", right: -3, top: "26%", width: 3, height: 72, background: "#2a2a2a", borderRadius: "0 2px 2px 0" }} />
            {/* Screen */}
            <div style={{
              width: "100%", height: "100%",
              borderRadius: 42, overflow: "hidden",
              background: "#000",
            }}>
              <video
                src="/image/airaware/demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ══ NEXT STEPS ════════════════════════════════════════ */}
      <Section bg="#F8FAFB">
        <SectionTitle>Next Steps</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          {NEXT_STEPS.map((n, i) => (
            <motion.div key={n.title} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              style={{
                background: "#fff", borderRadius: 18, padding: "2rem",
                border: `1px solid ${blue}18`,
                boxShadow: "0 4px 20px rgba(26,115,232,0.06)",
                display: "flex", flexDirection: "column", gap: "0.75rem",
              }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: `${blue}10`, border: `1.5px solid ${blue}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: font, fontWeight: 800, fontSize: "0.78rem",
                color: blue, flexShrink: 0,
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ fontFamily: font, fontWeight: 700, fontSize: "1rem",
                color: "#0a0a0a", lineHeight: 1.3 }}>{n.title}</div>
              <Body size="0.88rem" color="#666">{n.body}</Body>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ FOOTER NAV ════════════════════════════════════════ */}
      <div style={{ padding: "3rem 5%", display: "flex", justifyContent: "space-between",
        alignItems: "center", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <button onClick={goBack} style={{
          fontFamily: font, fontWeight: 600, fontSize: "1rem",
          background: "none", border: "2px solid #101010", color: "#101010",
          padding: "0.65rem 1.5rem", borderRadius: 40, cursor: "pointer",
        }}>← All Work</button>
        <div style={{ fontFamily: font, fontWeight: 300, fontSize: "0.9rem", color: "#888" }}>
          AirAware · UX Case Study
        </div>
      </div>

    </div>
  );
}
