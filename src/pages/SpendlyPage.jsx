import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const IMAGES = [
  "/image/Spendly/IMG_0046.jpg",
  "/image/Spendly/IMG_0047.PNG",
  "/image/Spendly/IMG_0049.PNG",
  "/image/Spendly/IMG_0051.PNG",
  "/image/Spendly/IMG_0053.PNG",
  "/image/Spendly/IMG_0056.PNG",
  "/image/Spendly/IMG_0058.PNG",
  "/image/Spendly/IMG_0059.PNG",
  "/image/Spendly/IMG_0060.PNG",
  "/image/Spendly/IMG_0061.PNG",
];

const KEY_INSIGHTS = [
  { title: "People spend impulsively without tracking.", quote: '"I get my paycheck and it just… disappears. I don\'t even know where it goes."' },
  { title: "Money management feels boring or stressful.", quote: '"Budgeting apps make me feel guilty instead of motivated."' },
  { title: "Most users want clarity, not control.", quote: "They don't want to log every expense, they want smart, automatic insights." },
  { title: "Motivation is emotional, not mathematical.", quote: 'Users respond better to encouragement ("You\'re doing great!") than warnings.' },
  { title: "Lack of long-term perspective.", quote: "Most young earners don't realize how saving small amounts compounds over time." },
];

const DESIGN_DECISIONS = [
  { challenge: "Users didn't notice the chatbot", change: "Added animation + icon cue", result: "Increased engagement" },
  { challenge: "Fonts too small on mobile", change: "Increased text size + spacing", result: "Easier readability" },
  { challenge: "Action cards unclear", change: 'Added success states ("Goal set!")', result: "Better feedback loop" },
  { challenge: "Too much text on graphs", change: "Simplified data view", result: "Cleaner visual flow" },
];

const TECH_STACK = [
  { category: "Frontend", items: ["React Native", "Expo"] },
  { category: "AI Engine", items: ["Google Gemini 2.5 Flash"] },
  { category: "Charts", items: ["react-native-chart-kit", "SVG"] },
  { category: "Navigation", items: ["React Navigation (Stack + Tabs)"] },
  { category: "Data Storage", items: ["AsyncStorage"] },
  { category: "Styling", items: ["LinearGradient", "Animated API"] },
];

const pink = "#FBA9A6";
const dark = "#0a0a0a";

function Section({ children, bg = "#fff", style = {}, id }) {
  return (
    <section id={id} style={{ background: bg, padding: "4rem 5%", ...style }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function SectionTitle({ children, color = "#0a0a0a" }) {
  return (
    <h2 style={{
      fontFamily: "Inter, sans-serif", fontWeight: 800,
      fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.04em",
      textTransform: "uppercase", color, lineHeight: "84%",
      marginBottom: "2rem",
    }}>
      {children}
    </h2>
  );
}

function Body({ children, color = "#333", size = "clamp(1rem, 1.6vw, 1.2rem)" }) {
  return (
    <p style={{
      fontFamily: "Inter, sans-serif", fontWeight: 300,
      fontSize: size, lineHeight: 1.65, letterSpacing: "-0.02em",
      color, margin: 0,
    }}>
      {children}
    </p>
  );
}

function Tag({ children }) {
  return (
    <span style={{
      display: "inline-block", background: "#f0f0f0",
      borderRadius: 40, padding: "0.3rem 0.85rem",
      fontFamily: "Inter", fontWeight: 500, fontSize: "0.8rem",
      color: "#333", letterSpacing: "0.02em",
    }}>
      {children}
    </span>
  );
}

export default function SpendlyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Spendly — Saloni Raut";
    return () => { document.title = "Saloni Raut"; };
  }, []);

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

      {/* Back button */}
      <button onClick={() => navigate("/")} style={{
        position: "fixed", top: 24, left: 24, zIndex: 100,
        background: "rgba(0,0,0,0.75)", border: "none", color: "#fff",
        fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.85rem",
        letterSpacing: "0.04em", padding: "0.5rem 1.1rem",
        borderRadius: 40, cursor: "pointer", backdropFilter: "blur(10px)",
      }}>
        ← Back
      </button>

      {/* ── HERO ── */}
      <div style={{ position: "relative", width: "100%", height: "clamp(360px, 55vh, 620px)", overflow: "hidden", background: "#0a0a0a" }}>
        <img src="/image/Spendly/cover.png" alt="Spendly cover"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7, filter: "blur(6px)", transform: "scale(1.05)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", right: "5%" }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "Inter, sans-serif", fontWeight: 800,
              fontSize: "clamp(2.2rem, 6vw, 5rem)", letterSpacing: "-0.04em",
              textTransform: "uppercase", color: "#fff", lineHeight: "84%", margin: 0,
            }}
          >
            Spendly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "Inter, sans-serif", fontWeight: 300,
              fontSize: "clamp(1rem, 2vw, 1.35rem)", color: "rgba(255,255,255,0.8)",
              marginTop: "1rem", letterSpacing: "-0.02em",
            }}
          >
            Making Money Simple, Not Stressful
          </motion.p>
        </div>
      </div>

      {/* ── META ── */}
      <Section bg="#f5f5f5">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "flex-start", justifyContent: "space-between" }}>
          {[
            { label: "Role", values: ["UX Researcher", "UI/UX Designer", "Developer", "Product Manager"] },
            { label: "Duration", values: ["12 Weeks"] },
            { label: "Category", values: ["Product Design", "Mobile App Development"] },
            { label: "Tech", values: ["React Native", "Expo", "Gemini AI"] },
          ].map((item) => (
            <div key={item.label}>
              <div style={{ fontFamily: "Inter", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.1em", color: "#888", textTransform: "uppercase", marginBottom: "0.5rem" }}>{item.label}</div>
              {item.values.map((v) => (
                <div key={v} style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "1rem", color: "#111", lineHeight: 1.7 }}>{v}</div>
              ))}
            </div>
          ))}
          <button
            onClick={() => document.getElementById("app-demo")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#0a0a0a", color: "#fff", borderRadius: 40,
              padding: "0.65rem 1.5rem", fontFamily: "Inter", fontWeight: 600,
              fontSize: "0.9rem", border: "none", letterSpacing: "0.02em",
              cursor: "pointer", alignSelf: "center",
            }}>
            ▶ Watch Demo
          </button>
        </div>
      </Section>

      {/* ── OVERVIEW ── */}
      <Section>
        <SectionTitle>Overview</SectionTitle>
        <Body>
          Spendly is an AI-powered personal finance coach that helps young earners understand their spending
          and build better money habits without stress, spreadsheets, or math. The app turns confusing numbers
          into friendly, easy-to-read insights and small actionable steps that help users spend smarter, save
          consistently, and grow their confidence with money.
        </Body>
      </Section>

      {/* ── PROBLEM FRAMING ── */}
      <Section bg="#0a0a0a">
        <SectionTitle color="#fff">Problem Statement</SectionTitle>
        <Body color="rgba(255,255,255,0.8)">
          Young people earning their first paychecks had no idea where their money was going. They spent
          impulsively and avoided finance apps because they felt overwhelming and guilt-inducing. The challenge
          was to design something that made money management feel simple, human, and calm. Not like homework.
        </Body>

      </Section>

      {/* ── COMPETITIVE ANALYSIS ── */}
      <Section bg="#f9f9f9">
        <SectionTitle>Competitive Analysis</SectionTitle>
        <Body color="#444">
          Before designing, I looked at what finance apps people were already using and where they were falling short.
        </Body>
        <div style={{ marginTop: "1.5rem", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)" }}>
          {/* header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1.5fr",
            background: "#0a0a0a", padding: "1rem 2rem", gap: "1.5rem" }}>
            {["App", "What works well", "What's missing"].map(h => (
              <div key={h} style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.75rem",
                letterSpacing: "0.1em", textTransform: "uppercase", color: "#FBA9A6" }}>{h}</div>
            ))}
          </div>
          {/* rows */}
          {[
            { app: "Rocket Money", good: "Subscription tracking", missing: "Limited coaching" },
            { app: "Mint",         good: "Great reports",         missing: "Too much information" },
            { app: "YNAB",         good: "Strong budgeting",      missing: "High learning curve" },
          ].map((row, i) => (
            <div key={row.app} style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1.5fr",
              gap: "1.5rem", padding: "1.25rem 2rem", alignItems: "center",
              background: i % 2 === 0 ? "#fff" : "#f9f9f9",
              borderTop: "1px solid rgba(0,0,0,0.05)" }}>
              <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.95rem", color: "#0a0a0a" }}>{row.app}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem",
                fontFamily: "Inter", fontSize: "0.93rem", color: "#2E7D32", lineHeight: 1.5 }}>
                <span style={{ fontWeight: 700 }}>✓</span> {row.good}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem",
                fontFamily: "Inter", fontSize: "0.93rem", color: "#B71C1C", lineHeight: 1.5 }}>
                <span style={{ fontWeight: 700 }}>✗</span> {row.missing}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "1.5rem", background: "#FFF3E0", borderRadius: 12,
          padding: "1.25rem 1.5rem", borderLeft: "3px solid #FBA9A6" }}>
          <Body size="0.93rem" color="#555">
            The pattern was clear: existing apps are data-heavy and intimidating. None of them felt like a coach. That's the gap Spendly is designed to fill.
          </Body>
        </div>
      </Section>

      {/* ── SOLUTION ── */}
      <Section>
        <SectionTitle>Solution</SectionTitle>
        <div style={{ background: "#f9f9f9", borderRadius: 20, padding: "2.5rem", borderLeft: "4px solid #FBA9A6" }}>
          <Body size="clamp(1.05rem, 1.8vw, 1.3rem)" color="#111">
            Spendly is a mobile app that uses AI to interpret spending, explain trends, and guide users with
            simple suggestions. It's designed to be friendly, calm, and motivational. The opposite of
            traditional finance apps.
          </Body>
          <div style={{ marginTop: "1.5rem", fontFamily: "Inter", fontWeight: 600, fontSize: "clamp(1rem, 1.6vw, 1.2rem)", color: "#333", fontStyle: "italic", letterSpacing: "-0.02em" }}>
            "See where your money goes, understand why, and take small steps toward your goals. All without doing math."
          </div>
        </div>

        <div style={{ marginTop: "2.5rem" }}>
          <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.8rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
            First Prototype Included
          </div>
          <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "disc" }}>
            {[
              "A basic dashboard with category charts",
              "A chatbot panel powered by Gemini AI",
              `Action cards suggesting micro-goals ("Save $10 this week")`,
            ].map((item, i) => (
              <li key={i} style={{ fontFamily: "Inter", fontWeight: 300, fontSize: "1rem", lineHeight: 1.65, letterSpacing: "-0.02em", color: "#333" }}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── USER FLOW ── */}
      <Section bg="#f9f9f9">
        <SectionTitle>User Flow</SectionTitle>

        {/* Timeline */}
        <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "0 1.25rem", alignItems: "start" }}>
          {[
            { label: "Opens the app",             note: "First thing they see is a calm, clean summary of where their money is." },
            { label: "Glances at the dashboard",  note: "No overwhelming numbers. Just a friendly snapshot of the week." },
            { label: "Taps into a category",       note: "Curious about food or subscriptions, they dig a little deeper." },
            { label: "The AI notices something",   note: "A gentle nudge: \"You've been spending a bit more on dining out lately.\"", highlight: true },
            { label: "They ask the chatbot",       note: "\"Why is my food spend so high?\" Spendly actually explains it." },
            { label: "Gets a suggestion",          note: "Not a warning. Just a small, doable idea: \"Want to try a $60 food budget this week?\"", highlight: true },
            { label: "Sets a goal",                note: "One tap. No forms. It feels more like a nudge than a commitment." },
            { label: "Comes back tomorrow",        note: "Spendly tracks quietly in the background. Progress feels effortless." },
          ].map((item, i, arr) => (
            <>
              {/* Left column: dot + connector */}
              <div key={`dot-${i}`} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  style={{
                    width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                    background: item.highlight ? "#0a0a0a" : "#fff",
                    border: `2px solid ${item.highlight ? "#0a0a0a" : "rgba(251,169,166,0.5)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "Inter", fontWeight: 800, fontSize: "0.78rem",
                    color: item.highlight ? "#FBA9A6" : "#ccc",
                    boxShadow: item.highlight ? "0 4px 16px rgba(0,0,0,0.18)" : "0 2px 8px rgba(0,0,0,0.05)",
                    zIndex: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
                {i < arr.length - 1 && (
                  <div style={{ width: 2, flex: 1, minHeight: 24,
                    background: i < 3 ? "#FBA9A6" : i < 5 ? "#0a0a0a" : "rgba(251,169,166,0.35)",
                    opacity: 0.35 }} />
                )}
              </div>

              {/* Right column: card */}
              <motion.div
                key={`card-${i}`}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.05, duration: 0.38 }}
                style={{
                  marginBottom: i < arr.length - 1 ? "1rem" : 0,
                  background: item.highlight ? "#0a0a0a" : "#fff",
                  borderRadius: 14,
                  padding: "1.1rem 1.5rem",
                  border: item.highlight ? "none" : "1px solid rgba(251,169,166,0.18)",
                  boxShadow: item.highlight
                    ? "0 8px 32px rgba(0,0,0,0.14)"
                    : "0 2px 12px rgba(251,169,166,0.07)",
                }}
              >
                <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.97rem",
                  color: item.highlight ? "#fff" : "#111", marginBottom: "0.3rem" }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "0.87rem",
                  color: item.highlight ? "rgba(255,255,255,0.55)" : "#888",
                  lineHeight: 1.65, fontStyle: "italic" }}>
                  {item.note}
                </div>
              </motion.div>
            </>
          ))}
        </div>

        {/* Example callout */}
        <div style={{
          marginTop: "2.5rem", background: "#fff", borderRadius: 16,
          padding: "2rem 2.5rem", borderLeft: "3px solid #FBA9A6",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}>
          <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.72rem",
            textTransform: "uppercase", letterSpacing: "0.1em", color: "#FBA9A6", marginBottom: "0.85rem" }}>
            Example
          </div>
          <Body color="#333">
            A user sees they spent more on food than expected. The AI explains the pattern and suggests
            setting a weekly food budget.
          </Body>
        </div>
      </Section>

      {/* ── APP SCREENS ── */}
      <Section bg="#f5f5f5">
        <SectionTitle>App Screens</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "2rem" }}>
          {IMAGES.map((src, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {/* Phone shell */}
              <div style={{
                position: "relative",
                width: "100%",
                maxWidth: 220,
                aspectRatio: "9/19.5",
                background: "#1a1a1a",
                borderRadius: 36,
                boxShadow: "0 0 0 2px #333, 0 24px 48px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.06)",
                padding: "12px 8px",
                boxSizing: "border-box",
              }}>
                {/* Dynamic island notch */}
                <div style={{
                  position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)",
                  width: 80, height: 20, background: "#0a0a0a",
                  borderRadius: 12, zIndex: 3,
                }} />
                {/* Side buttons */}
                <div style={{ position: "absolute", left: -3, top: "22%", width: 3, height: 28, background: "#333", borderRadius: "2px 0 0 2px" }} />
                <div style={{ position: "absolute", left: -3, top: "32%", width: 3, height: 44, background: "#333", borderRadius: "2px 0 0 2px" }} />
                <div style={{ position: "absolute", left: -3, top: "44%", width: 3, height: 44, background: "#333", borderRadius: "2px 0 0 2px" }} />
                <div style={{ position: "absolute", right: -3, top: "28%", width: 3, height: 60, background: "#333", borderRadius: "0 2px 2px 0" }} />
                {/* Screen area */}
                <div style={{
                  width: "100%", height: "100%",
                  borderRadius: 28, overflow: "hidden",
                  background: "#000",
                }}>
                  <img src={src} alt={`Spendly screen ${i + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── RESEARCH ── */}
      <Section>
        <SectionTitle>Research & Key Insights</SectionTitle>
        <Body>
          I conducted 6 user interviews with early earners aged 18–25, including college students and recent
          graduates, alongside secondary research on behavioral finance and personal savings psychology.
        </Body>

        {/* Research Methods */}
        <div style={{ margin: "2rem 0 3rem" }}>
          <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em",
            textTransform: "uppercase", color: pink, marginBottom: "1.25rem" }}>Research Methods</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { icon: "💬", label: "Semi-structured interviews" },
              { icon: "🗣", label: "Informal conversations about spending behavior" },
              { icon: "👀", label: "Observation of how users describe their money habits" },
              { icon: "📱", label: "Review of existing finance apps" },
            ].map((m) => (
              <div key={m.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem",
                background: "#fff", borderRadius: 14, padding: "1.25rem 1.5rem",
                border: `1.5px solid ${pink}25`,
                boxShadow: `0 4px 16px ${pink}08` }}>
                <span style={{ fontSize: "1.4rem", lineHeight: 1, flexShrink: 0, marginTop: "0.1rem" }}>{m.icon}</span>
                <div style={{ fontFamily: "Inter", fontWeight: 500, fontSize: "0.92rem",
                  color: dark, lineHeight: 1.6 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {KEY_INSIGHTS.map((insight, i) => (
            <div key={i} style={{ background: "#f9f9f9", borderRadius: 16, padding: "1.5rem 2rem", borderLeft: "3px solid #FBA9A6" }}>
              <div style={{ fontFamily: "Inter", fontWeight: 600, fontSize: "1rem", color: "#111", marginBottom: "0.4rem" }}>{insight.title}</div>
              <div style={{ fontFamily: "Inter", fontWeight: 300, fontSize: "0.95rem", color: "#555", fontStyle: "italic" }}>{insight.quote}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── USER ARCHETYPES ── */}
      <Section bg="#f5f5f5">
        <SectionTitle>User Archetypes</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {[
            { name: "The Anxious Tracker", desc: "Worries about overspending, checks balance often, seeks reassurance." },
            { name: "The Reluctant Budgeter", desc: "Wants to save but hates logging expenses manually." },
            { name: "The Growth Seeker", desc: "Has income and curiosity about investing but lacks guidance." },
          ].map((a) => (
            <div key={a.name} style={{ background: "#fff", borderRadius: 16, padding: "2rem" }}>
              <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "1.1rem", color: "#111", marginBottom: "0.75rem" }}>{a.name}</div>
              <Body size="0.95rem">{a.desc}</Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SERVICE BLUEPRINT + STORYBOARD ── */}
      <Section>
        <SectionTitle>Service Blueprint & Storyboard</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
          {[
            { src: "/image/Spendly/service blueprint.jpg", label: "Service Blueprint" },
            { src: "/image/Spendly/story board.png", label: "Storyboard" },
          ].map((item) => (
            <div key={item.label}
              style={{ borderRadius: 16, overflow: "hidden", background: "#f0f0f0" }}
            >
              <img src={item.src} alt={item.label}
                style={{ width: "100%", display: "block", objectFit: "contain", maxHeight: item.label === "Service Blueprint" ? 700 : 500 }} />
              <div style={{ padding: "0.75rem 1rem", fontFamily: "Inter", fontWeight: 500, fontSize: "0.85rem", color: "#555" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TESTING ── */}
      <Section bg="#0a0a0a">
        <SectionTitle color="#fff">User Testing</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {[
            { label: "Participants", value: "5 users" },
            { label: "Age Range", value: "18–23" },
            { label: "Method", value: "Think-aloud + follow-up" },
            { label: "Duration", value: "10–15 min each" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 16, padding: "1.5rem 2rem" }}>
              <div style={{ fontFamily: "Inter", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.label}</div>
              <div style={{ fontFamily: "Inter", fontWeight: 600, fontSize: "1.2rem", color: "#fff" }}>{stat.value}</div>
            </div>
          ))}
        </div>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem", listStyle: "disc" }}>
          {[
            'Users loved the chatbot tone: "It feels like a friend, not an app."',
            "Charts were clear, but some wanted interactivity.",
            "Action cards motivated small savings, but users wanted confirmation after each action.",
            "Font size and contrast needed improvement for readability.",
            "AI suggestions felt smart but could be more personalized.",
          ].map((insight, i) => (
            <li key={i} style={{ fontFamily: "Inter", fontWeight: 300, fontSize: "1rem", lineHeight: 1.65, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.75)" }}>{insight}</li>
          ))}
        </ul>
      </Section>

      {/* ── DESIGN PROCESS ── */}
      <Section bg="#f9f9f9">
        <SectionTitle>Design Process</SectionTitle>

        {/* Timeline */}
        <div style={{ overflowX: "auto", paddingBottom: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 0, minWidth: "max-content", margin: "0 auto" }}>
            {[
              "Research", "Insights", "Archetypes", "Sketches", "Wireframes",
              "UI Design", "Prototype", "Development", "Testing", "Iteration",
            ].map((step, i, arr) => (
              <div key={step} style={{ display: "flex", alignItems: "center" }}>
                {/* Step pill */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
                  }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: i === 0 || i === arr.length - 1 ? "#0a0a0a" : "#fff",
                    border: `2px solid ${i === 0 || i === arr.length - 1 ? "#0a0a0a" : "#FBA9A6"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "Inter", fontWeight: 700, fontSize: "0.7rem",
                    color: i === 0 || i === arr.length - 1 ? "#fff" : "#FBA9A6",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <div style={{
                    fontFamily: "Inter", fontWeight: 600, fontSize: "0.72rem",
                    color: i === 0 || i === arr.length - 1 ? "#0a0a0a" : "#555",
                    letterSpacing: "0.01em", whiteSpace: "nowrap",
                  }}>
                    {step}
                  </div>
                </motion.div>
                {/* Connector */}
                {i < arr.length - 1 && (
                  <div style={{
                    width: 40, height: 2,
                    background: `linear-gradient(to right, #FBA9A6, #FBA9A680)`,
                    marginBottom: "1.4rem", flexShrink: 0,
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Summary */}
        <div style={{
          marginTop: "2.5rem", background: "#fff", borderRadius: 16,
          padding: "2rem 2.5rem", borderLeft: "3px solid #FBA9A6",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}>
          <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.72rem",
            textTransform: "uppercase", letterSpacing: "0.1em", color: "#FBA9A6", marginBottom: "0.85rem" }}>
            Process Summary
          </div>
          <Body color="#333">
            I started by understanding the problem through interviews. Then I translated research insights into
            archetypes and user flows. After that, I designed wireframes and built the final mobile prototype
            using React Native and Google Gemini AI.
          </Body>
        </div>
      </Section>

      {/* ── RESULTS ── */}
      <Section bg="#0a0a0a">
        <SectionTitle color="#fff">Results</SectionTitle>

        {/* Stat bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }}>
          {[
            { value: "5", label: "Users tested" },
            { value: "100%", label: "Understood the core purpose" },
            { value: "4/5", label: "Loved the AI tone" },
            { value: "3+", label: "Feature requests for automation" },
          ].map((s) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ flex: "1 1 160px", background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16,
                padding: "1.75rem 1.5rem" }}>
              <div style={{ fontFamily: "Inter", fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#FBA9A6",
                letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.5rem" }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "0.85rem",
                color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Finding cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { text: "Users understood the main purpose of the app quickly.", positive: true },
            { text: "Users liked the friendly AI tone — it felt supportive, not clinical.", positive: true },
            { text: "Visual spending summaries helped users understand their habits at a glance.", positive: true },
            { text: "Users wanted more automation instead of manual expense entry.", positive: false },
            { text: "Users were interested in future credit or bank integration.", positive: false },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              style={{ display: "flex", alignItems: "flex-start", gap: "1rem",
                background: "rgba(255,255,255,0.03)", borderRadius: 12,
                padding: "1.1rem 1.4rem",
                borderLeft: `3px solid ${item.positive ? "#FBA9A6" : "rgba(255,255,255,0.15)"}` }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: "0.1rem",
                background: item.positive ? "rgba(251,169,166,0.15)" : "rgba(255,255,255,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.8rem" }}>
                {item.positive ? "✓" : "→"}
              </div>
              <div style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "0.95rem",
                color: item.positive ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)",
                lineHeight: 1.65 }}>
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Takeaway */}
        <div style={{ marginTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "2rem" }}>
          <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.7rem", textTransform: "uppercase",
            letterSpacing: "0.12em", color: "#FBA9A6", marginBottom: "0.85rem" }}>Takeaway</div>
          <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: "clamp(1rem,1.8vw,1.2rem)",
            color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            "Spendly proved that people don't need more financial data. They need a calmer, friendlier way to understand it."
          </p>
        </div>
      </Section>

      {/* ── DESIGN DECISIONS ── */}
      <Section>
        <SectionTitle>Design Decisions</SectionTitle>
        <p style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "0.9rem", color: "#555", marginBottom: "2rem", letterSpacing: "0.01em" }}>
          Hover each card to see the fix
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {DESIGN_DECISIONS.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 1000, height: 200 }}
            >
              {/* Flip container */}
              <motion.div
                whileHover="flipped"
                initial="front"
                style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", cursor: "pointer" }}
                variants={{ front: { rotateY: 0 }, flipped: { rotateY: 180 } }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Front — Challenge */}
                <div style={{
                  position: "absolute", inset: 0, backfaceVisibility: "hidden",
                  background: "#f9f9f9", borderRadius: 16, padding: "1.75rem",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}>
                  <div>
                    <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.7rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                      Challenge
                    </div>
                    <div style={{ fontFamily: "Inter", fontWeight: 500, fontSize: "1rem", color: "#111", lineHeight: 1.5 }}>
                      {d.challenge}
                    </div>
                  </div>
                  <div style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "0.75rem", color: "#888", marginTop: "1rem" }}>
                    Hover to see fix ↗
                  </div>
                </div>

                {/* Back — Fix + Result */}
                <div style={{
                  position: "absolute", inset: 0, backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background: "#0a0a0a", borderRadius: 16, padding: "1.75rem",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}>
                  <div>
                    <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.7rem", color: "#FBA9A6", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                      Fix
                    </div>
                    <div style={{ fontFamily: "Inter", fontWeight: 500, fontSize: "1rem", color: "#fff", lineHeight: 1.5 }}>
                      {d.change}
                    </div>
                  </div>
                  <div style={{
                    display: "inline-block", background: "rgba(251,169,166,0.15)",
                    border: "1px solid rgba(251,169,166,0.4)",
                    borderRadius: 40, padding: "0.3rem 0.9rem",
                    fontFamily: "Inter", fontWeight: 600, fontSize: "0.8rem", color: "#FBA9A6",
                    alignSelf: "flex-start",
                  }}>
                    {d.result}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── TECH STACK ── */}
      <Section bg="#f5f5f5">
        <SectionTitle>Tech Stack</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "2rem" }}>
          {TECH_STACK.map((group) => (
            <div key={group.category}>
              <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.75rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
                {group.category}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {group.items.map((item) => (
                  <div key={item} style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "1rem", color: "#111", lineHeight: 1.5 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT I LEARNED ── */}
      <Section bg="#0a0a0a">
        <SectionTitle color="#fff">What I Learned</SectionTitle>
        <div style={{
          maxWidth: 860,
          background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)",
          border: "1px solid rgba(251,169,166,0.24)",
          borderRadius: 20,
          padding: "2rem 2.25rem",
          boxShadow: "0 14px 34px rgba(0,0,0,0.28)",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "clamp(0.98rem,1.5vw,1.08rem)",
              lineHeight: 1.9, color: "rgba(255,255,255,0.76)", margin: 0 }}>
              Spendly was inspired by a real pattern I noticed in myself and people around me: young earners often get paid, spend on small everyday things like food, shopping, and subscriptions, and only realize later that the money disappeared faster than expected.
            </p>
            <p style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "clamp(0.98rem,1.5vw,1.08rem)",
              lineHeight: 1.9, color: "rgba(255,255,255,0.76)", margin: 0 }}>
              This helped me understand that personal finance is not just a math problem. It is a behavior and awareness problem. Users do not need another complicated budgeting tool; they need a product that helps them clearly see their habits and take small, realistic steps.
            </p>
            <p style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "clamp(0.98rem,1.5vw,1.08rem)",
              lineHeight: 1.9, color: "rgba(255,255,255,0.76)", margin: 0 }}>
              Building Spendly end-to-end taught me how to connect user research, product thinking, UI design, AI integration, and mobile development into one complete product experience. It also showed me that strong design decisions come from real user behavior, not assumptions.
            </p>
          </div>
        </div>
      </Section>

      {/* ── NEXT STEPS ── */}
      <Section bg="#f5f5f5">
        <SectionTitle>Next Steps</SectionTitle>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "disc" }}>
          {[
            "Integrate Credit & Banking APIs so users no longer need to manually input expenses.",
            "Enhance AI Capabilities to improve personalization and financial goal recommendations.",
            "Deploy on App Stores for real user testing and feedback.",
          ].map((step, i) => (
            <li key={i} style={{ fontFamily: "Inter", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.65, letterSpacing: "-0.02em", color: "#444" }}>{step}</li>
          ))}
        </ul>
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <Body color="#777" size="1.05rem" style={{ fontStyle: "italic" }}>
            "Spendly taught me how to merge design thinking with AI technology to solve real-world problems.
            It's more than a budgeting app. It's a reflection of how smart design can make something complex
            feel human, approachable, and empowering."
          </Body>
        </div>
      </Section>

      {/* ── VIDEO ── */}
      <Section bg="#0a0a0a" id="app-demo">
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
                src="/image/Spendly/demo.mp4"
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

      {/* ── FOOTER NAV ── */}
      <div style={{ padding: "3rem 5%", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <button onClick={() => { navigate("/"); setTimeout(() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" }), 100); }} style={{
          fontFamily: "Inter", fontWeight: 600, fontSize: "1rem",
          background: "none", border: "2px solid #0a0a0a", color: "#0a0a0a",
          padding: "0.65rem 1.5rem", borderRadius: 40, cursor: "pointer",
        }}>
          ← All Work
        </button>
        <div style={{ fontFamily: "Inter", fontWeight: 300, fontSize: "0.9rem", color: "#888" }}>
          Spendly · Product Design
        </div>
      </div>
    </div>
  );
}
