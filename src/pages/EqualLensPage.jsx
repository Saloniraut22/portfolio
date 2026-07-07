import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* ─── shared primitives ─────────────────────────── */
const font = "Inter, sans-serif";
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

function H({ children, color = "#101010", size = "clamp(2rem,5vw,4.5rem)", style = {} }) {
  return (
    <h2 style={{ fontFamily: font, fontWeight: 800, fontSize: size, letterSpacing: "-0.04em",
      textTransform: "uppercase", color, lineHeight: "84%", margin: 0, ...style }}>
      {children}
    </h2>
  );
}

function P({ children, color = "#000", size = "clamp(1rem,1.8vw,1.35rem)", style = {} }) {
  return (
    <p style={{ fontFamily: font, fontWeight: 300, fontSize: size, lineHeight: 1.6,
      letterSpacing: "-0.03em", color, margin: 0, ...style }}>
      {children}
    </p>
  );
}

function Label({ children, color = "#555" }) {
  return (
    <div style={{ fontFamily: font, fontWeight: 500, fontSize: "0.85rem",
      letterSpacing: "0.07em", textTransform: "uppercase", color, marginBottom: "0.75rem" }}>
      {children}
    </div>
  );
}

function Wrap({ children, bg = "#fff", py = "5rem", px = "5%" }) {
  return (
    <section style={{ background: bg, padding: `${py} ${px}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function FullVideo({ src, maxHeight = "80vh" }) {
  return (
    <div style={{ background: "#000", width: "100%" }}>
      <video src={src} autoPlay loop muted playsInline
        style={{ width: "100%", display: "block", maxHeight, objectFit: "cover" }} />
    </div>
  );
}

/* ─── AR feature data ───────────────────────────── */
const AR_FEATURES = [
  {
    id: "realtime",
    label: "Real-Time Bias Awareness",
    tagline: "Notice bias → Balance instantly",
    body: "AR glasses provide subtle visual cues to help professionals spot uneven focus and adjust in real time. Concentric rings in the peripheral view indicate where attention is concentrated.",
    video: asset("/image/equallens/2.1.mov"),
  },
  {
    id: "memory",
    label: "Memory & Engagement",
    tagline: "Remember names → Build trust",
    body: "Name overlays appear subtly in the lens view, helping service professionals personalise interactions and avoid identity-based assumptions.",
    video: asset("/image/equallens/2.2.mov"),
  },
  {
    id: "conversation",
    label: "Conversational Support",
    tagline: "Get stuck → Re-engage smoothly",
    body: "When a user hasn't engaged someone for a while, AI-generated talking points appear — making it easier to include everyone equally.",
    video: asset("/image/equallens/2.3.mov"),
  },
  {
    id: "insights",
    label: "Post-Interaction Insights",
    tagline: "Reflect → Improve over time",
    body: "A post-session dashboard surfaces who you spoke with and for how long — helping professionals track and grow their inclusive habits over time.",
    video: asset("/image/equallens/2.4.mov"),
  },
];

/* ─── main component ────────────────────────────── */
export default function EqualLensPage() {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState("realtime");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Equal Lens — Saloni Raut";
    return () => { document.title = "Saloni Raut"; };
  }, []);

  const feature = AR_FEATURES.find(f => f.id === activeFeature);

  const goBack = () => {
    navigate("/");
    setTimeout(() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>

      {/* back button */}
      <button onClick={goBack} style={{
        position: "fixed", top: 24, left: 24, zIndex: 100,
        background: "rgba(0,0,0,0.7)", border: "none", color: "#fff",
        fontFamily: font, fontWeight: 500, fontSize: "0.85rem",
        letterSpacing: "0.04em", padding: "0.5rem 1.1rem",
        borderRadius: 40, cursor: "pointer", backdropFilter: "blur(10px)",
      }}>← Back</button>

      {/* ══ 1. HERO ════════════════════════════════════════════ */}
      <div style={{ position: "relative", width: "100%", height: "clamp(420px,65vh,740px)", overflow: "hidden" }}>
        <img src={asset("/image/AI Sunglasses/Cover.png")} alt="Equal Lens"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "blur(6px)", transform: "scale(1.05)" }} />
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(160deg,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.1) 60%)" }} />
        <div style={{ position: "absolute", top: 40, left: "5%", right: "5%" }}>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <H color="#fff" size="clamp(2.8rem,9vw,6.5rem)">Equal Lens:<br />AR for Inclusive<br />Communication</H>
          </motion.div>
        </div>
      </div>

      {/* ══ 3. PROJECT META ════════════════════════════════════ */}
      <div style={{ background: "#fff", padding: "3rem 5% 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem" }}>
          {[
            { label: "My Role", values: ["UI/UX Design", "User Research", "User Interview"] },
            { label: "Duration", values: ["3 Weeks"] },
            { label: "Team", values: ["3 People"] },
            { label: "Tools", values: ["Figma", "Miro"] },
          ].map((item) => (
            <div key={item.label}>
              <div style={{ fontFamily: font, fontWeight: 800, fontSize: "clamp(1rem,2vw,1.3rem)",
                textTransform: "uppercase", letterSpacing: "-0.02em", color: "#101010",
                marginBottom: "0.6rem" }}>{item.label}</div>
              {item.values.map((v) => (
                <div key={v} style={{ fontFamily: font, fontWeight: 300, fontSize: "1rem",
                  color: "#333", lineHeight: 1.8 }}>{v}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══ 2. OVERVIEW / SUMMARY ══════════════════════════════ */}
      <Wrap bg="#fff" py="3rem">
        <H size="clamp(1.8rem,4vw,3.2rem)">Summary</H>
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: 900 }}>
          <P color="#222">
            Equal Lens is a human-centered design project focused on uncovering and addressing unconscious gender bias in everyday professional interactions. Through interviews and contextual research, we found that customer-facing professionals often engage in subtle biased behaviors such as giving more attention or responses to male-presenting individuals, which can leave women feeling excluded or undervalued. These behaviors are usually unintentional, yet they contribute to larger patterns of inequality in communication and decision-making.
          </P>
          <P color="#222">
            To address this, we developed a low-fidelity augmented reality (AR) prototype that provides real-time, non-intrusive feedback to help users become more aware of their communication patterns. Key features include eye-tracking visualization, conversation prompts, and name overlays to support inclusive engagement. User testing showed the tool helped surface unconscious habits and encouraged more balanced interactions. Feedback also informed future iterations, including UI simplification and post-session summaries. Equal Lens ultimately supports a shift toward more inclusive and respectful communication through mindful technology design.
          </P>
        </div>
      </Wrap>

      {/* ══ 4. PROBLEM STATEMENT ═══════════════════════════════ */}
      <Wrap bg="#000" py="5rem">
        <H color="#F9F9F9" size="clamp(1.8rem,4vw,3.2rem)">What problem am I trying to solve?</H>
        <div style={{ marginTop: "2.5rem", maxWidth: 950 }}>
          <P color="#F9F9F9">
            In professional settings, people often give more attention to men without realizing it. This
            unconscious bias makes women feel excluded or undervalued. Since these habits are subtle and
            unintentional, we need tools that raise awareness and encourage more equal, inclusive communication.
          </P>
        </div>
      </Wrap>

      {/* ══ 5. SECONDARY RESEARCH ══════════════════════════════ */}
      <Wrap bg="#F8EAF4" py="4rem">
        <H size="clamp(1.8rem,4vw,3.2rem)">Secondary Research</H>
        <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          {[
            { stat: "33%", body: "Studies show women are interrupted more often than men in meetings." },
            { stat: "60%", body: "In mixed-gender conversations, men receive follow-up questions." },
            { stat: "80%", body: "Workplace bias training is common, but these numbers focus on post-event reflection rather than real-time feedback." },
          ].map((item) => (
            <motion.div key={item.stat} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: "#fff", borderRadius: 16, padding: "2rem", textAlign: "center",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontFamily: font, fontWeight: 900, fontSize: "clamp(2.5rem,5vw,3.5rem)",
                color: "#101010", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.75rem" }}>
                {item.stat}
              </div>
              <P size="0.95rem" color="#444">{item.body}</P>
            </motion.div>
          ))}
        </div>
        <div style={{ marginTop: "1.5rem", fontFamily: font, fontWeight: 400, fontSize: "0.8rem",
          color: "#888", fontStyle: "italic" }}>
          Sources: McKinsey Women in the Workplace 2022, Harvard Business Review, World Economic Forum 2023
        </div>
      </Wrap>

      {/* ══ 6. INTERVIEWS ══════════════════════════════════════ */}
      <Wrap bg="#F8EAF4" py="4rem">
        <H size="clamp(1.8rem,4vw,3.2rem)">Interviews</H>
        <div style={{ marginTop: "1rem", marginBottom: "2rem", maxWidth: 860 }}>
          <P color="#333">
            We conducted user interviews with professionals in customer-facing roles and observed 3 workplace meetings/discussions to better understand how unconscious gender bias shows up in real interactions.
          </P>
        </div>
        <div style={{ fontFamily: font, fontWeight: 700, fontSize: "1rem", color: "#101010", marginBottom: "1.25rem" }}>
          What we observed
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            "Women often reported feeling unsafe in public spaces, particularly when walking alone at night. In professional settings, especially male-dominated fields like tech, many shared that they were not taken seriously or felt pressured to suppress emotions to appear professional. These experiences highlight how gendered expectations shape confidence, visibility, and participation.",
            "Participants explained that the way they grew up strongly influenced their view of gender roles. Some were taught that girls should remain quiet or act a certain way, while others adopted more masculine traits to fit in. Family and societal expectations also shaped life decisions, for example, assumptions that men should focus on careers while women prioritize home and caregiving.",
            "A recurring theme was the absence of women in leadership, speaking opportunities, and influential spaces, which left many feeling underrepresented. Participants also mentioned how unfair policies and laws reinforced exclusion and made certain groups feel they did not belong. This underscored the need for more inclusive representation and equitable systems.",
          ].map((text, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "1.5rem 1.75rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
              <P size="0.97rem" color="#333">{text}</P>
            </div>
          ))}
        </div>
      </Wrap>

      {/* ══ 8. USER PERSONAS ═══════════════════════════════════ */}
      <div style={{ background: "#fff", padding: "3rem 5% 1.5rem" }}>
        <H size="clamp(1.8rem,4vw,3.5rem)">User Persona</H>
      </div>
      <div style={{ background: "#fff", padding: "0 5% 2.5rem",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        <img src={asset("/image/equallens/user-persona1.png")} alt="User Persona — Ethan Miller"
          style={{ width: "100%", display: "block", borderRadius: 16 }} />
        <img src={asset("/image/equallens/user-persona2.png")} alt="User Persona — Luis Ramirez"
          style={{ width: "100%", display: "block", borderRadius: 16 }} />
      </div>

      {/* ══ 9. USER JOURNEY MAP ════════════════════════════════ */}
      <div style={{ background: "#000", padding: "3rem 5% 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", paddingBottom: "1.5rem" }}>
          <H color="#fff" size="clamp(1.8rem,4vw,3.2rem)">User Journey Mapping</H>
        </div>
      </div>
      <div style={{ background: "#000", padding: "0 5% 2.5rem", display: "flex", justifyContent: "center" }}>
        <img src={asset("/image/equallens/user-journey-map.png")} alt="User Journey Map"
          style={{ width: "100%", maxWidth: 860, display: "block", borderRadius: 16,
            imageRendering: "auto" }} />
      </div>

      {/* ══ 9b. KEY INSIGHTS ═══════════════════════════════════ */}
      <Wrap bg="#F8EAF4" py="4rem">
        <H size="clamp(1.8rem,4vw,3.2rem)">Key Insights</H>
        <div style={{ marginTop: "2.5rem", display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {[
            { n: "01", title: "Bias awareness is not enough", body: "Users notice discrimination, but without support it leads to frustration and exclusion." },
            { n: "02", title: "Emotional labor drains energy", body: "Constantly adjusting to fit in creates stress, burnout, and inauthentic behavior." },
            { n: "03", title: "Networks create empowerment", body: "Supportive communities turn struggles into confidence, advocacy, and change." },
          ].map((item) => (
            <motion.div key={item.n} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: "#fff", borderRadius: 16, padding: "2rem",
                borderLeft: "3px solid #c87ab0",
                boxShadow: "0 2px 12px rgba(200,122,176,0.1)" }}>
              <div style={{ fontFamily: font, fontWeight: 900, fontSize: "1.4rem",
                color: "rgba(200,122,176,0.3)", letterSpacing: "-0.04em",
                lineHeight: 1, marginBottom: "1rem" }}>{item.n}</div>
              <div style={{ fontFamily: font, fontWeight: 700, fontSize: "1rem",
                color: "#101010", marginBottom: "0.6rem", lineHeight: 1.3 }}>{item.title}</div>
              <P size="0.92rem" color="#555">{item.body}</P>
            </motion.div>
          ))}
        </div>
      </Wrap>

      {/* ══ 10. PRODUCT SPECIFICATIONS ═════════════════════════ */}
      <section style={{ background: "#101010", padding: "5rem 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <H color="#fff" size="clamp(1.8rem,4vw,3.2rem)">Product Specifications</H>
          <div style={{ marginTop: "3rem", display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { n: "01", title: "Real-Time Bias Awareness", tagline: "Notice bias → Balance instantly", body: "AR glasses provide subtle visual cues to help professionals spot uneven focus and adjust in real time.", accent: "#E8A0D0" },
              { n: "02", title: "Memory & Engagement Support", tagline: "Remember names → Build trust", body: "Reminders of names and preferences help users personalize service and avoid stereotypes.", accent: "#A8C8F0" },
              { n: "03", title: "Conversational Guidance", tagline: "Get stuck → Re-engage smoothly", body: "Suggested prompts and talking points make it easier to include everyone equally in conversations.", accent: "#A0D8C0" },
              { n: "04", title: "Post-Interaction Insights", tagline: "Reflect → Improve over time", body: "Feedback summaries reveal engagement patterns, helping professionals grow more inclusive with practice.", accent: "#F0C8A0" },
            ].map((item, i) => (
              <motion.div key={item.n}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.45 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 20, padding: "2rem",
                  border: `1px solid ${item.accent}25`,
                  display: "flex", flexDirection: "column", gap: "1rem",
                  position: "relative", overflow: "hidden",
                }}>
                {/* Accent glow top-right */}
                <div style={{
                  position: "absolute", top: -30, right: -30,
                  width: 100, height: 100, borderRadius: "50%",
                  background: `${item.accent}15`, filter: "blur(24px)",
                  pointerEvents: "none",
                }} />
                {/* Number */}
                <div style={{ fontFamily: font, fontWeight: 900, fontSize: "2.2rem",
                  color: `${item.accent}30`, letterSpacing: "-0.05em", lineHeight: 1 }}>{item.n}</div>
                {/* Tagline pill */}
                <div style={{ display: "inline-flex", alignItems: "center",
                  background: `${item.accent}15`, borderRadius: 40,
                  padding: "0.3rem 0.85rem", alignSelf: "flex-start",
                  fontFamily: font, fontWeight: 600, fontSize: "0.75rem",
                  color: item.accent, letterSpacing: "0.02em" }}>
                  {item.tagline}
                </div>
                <div style={{ fontFamily: font, fontWeight: 700, fontSize: "1.05rem",
                  color: "#fff", lineHeight: 1.3 }}>{item.title}</div>
                <P size="0.9rem" color="rgba(255,255,255,0.55)">{item.body}</P>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 11. EPICS & USER STORIES ═══════════════════════════ */}
      <section style={{ background: "#FFFDE7", padding: "4rem 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <H size="clamp(1.8rem,4vw,3.5rem)">Epics &amp; User Stories</H>

          {/* Role banner */}
          <div style={{ margin: "2rem 0 1.5rem", display: "inline-flex", alignItems: "center", gap: "0.75rem",
            background: "#101010", borderRadius: 40, padding: "0.5rem 1.25rem" }}>
            <span style={{ fontFamily: font, fontWeight: 400, fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>As a</span>
            <span style={{ fontFamily: font, fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>Car Salesperson...</span>
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                epic: "Real-Time Bias Awareness",
                goal: "Recognize and adjust biased interaction patterns in real time",
                story: "I want to receive visual cues when I focus more on one customer over another, so that I can immediately balance my engagement and maintain equitable interactions.",
                accent: "#E8A0D0",
              },
              {
                epic: "Memory & Engagement",
                goal: "Remember customer details and personalize service",
                story: "I want to remember customer details and surface decision-making cues easily, so that I can tailor my engagement to both customers equally and close more deals.",
                accent: "#A8C8F0",
              },
              {
                epic: "Conversational Support",
                goal: "Provide guidance to respond, redirect, and re-engage",
                story: "I want to request suggested talking points, so that I can include both customers equally when I'm not sure how to shift focus without seeming awkward.",
                accent: "#A0D8C0",
              },
              {
                epic: "Post-Interaction Insights",
                goal: "Offer short, data-driven feedback after interactions",
                story: "I want to receive a summary after each customer meeting highlighting any imbalance in engagement to understand my patterns and make corrections for future interactions.",
                accent: "#F0C8A0",
              },
            ].map((item, i) => (
              <motion.div key={item.epic} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: "#fff", borderRadius: 18, overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                {/* Colored header bar */}
                <div style={{ background: item.accent, padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontFamily: font, fontWeight: 800, fontSize: "0.95rem",
                    color: "#101010", lineHeight: 1.3, marginBottom: "0.4rem" }}>{item.epic}</div>
                  <div style={{ fontFamily: font, fontWeight: 400, fontSize: "0.82rem",
                    color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>{item.goal}</div>
                </div>
                {/* User story */}
                <div style={{ padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontFamily: font, fontWeight: 600, fontSize: "0.72rem",
                    textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa",
                    marginBottom: "0.6rem" }}>User Story</div>
                  <P size="0.88rem" color="#444">{item.story}</P>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 12. STORYBOARD ═════════════════════════════════════ */}
      <div style={{ background: "#fff", padding: "3rem 5% 1rem" }}>
        <H size="clamp(1.8rem,4vw,3.5rem)">Storyboard</H>
      </div>
      {/* first image full width */}
      <div style={{ background: "#fff", padding: "0 5% 2rem" }}>
        <img src={asset("/image/equallens/storyboard-1.png")} alt="Storyboard"
          style={{ width: "100%", display: "block", borderRadius: 16 }} />
      </div>
      {/* next two side by side */}
      <div style={{ background: "#fff", padding: "0 5% 2.5rem",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        <img src={asset("/image/equallens/storyboard-2.png")} alt="Storyboard photo 1"
          style={{ width: "100%", display: "block", borderRadius: 16, objectFit: "cover" }} />
        <img src={asset("/image/equallens/storyboard-3.png")} alt="Storyboard photo 2"
          style={{ width: "100%", display: "block", borderRadius: 16, objectFit: "cover" }} />
      </div>

      {/* ══ 12c. PROTOTYPE SCREENS ═════════════════════════════ */}
      <div style={{ background: "#fff", padding: "1rem 5% 1rem" }}>
        <H size="clamp(1.8rem,4vw,3.5rem)">Lo-fi Prototype</H>
      </div>
      <div style={{ background: "#fff", padding: "0 5% 2rem" }}>
        <img src={asset("/image/equallens/prototype-1.png")} alt="Prototype screen 1"
          style={{ width: "100%", display: "block", borderRadius: 16 }} />
      </div>
      <div style={{ background: "#fff", padding: "0 5% 2rem" }}>
        <img src={asset("/image/equallens/prototype-2.png")} alt="Prototype screen 2"
          style={{ width: "100%", display: "block", borderRadius: 16 }} />
      </div>
      <div style={{ background: "#fff", padding: "0 5% 2.5rem" }}>
        <img src={asset("/image/equallens/prototype-3.png")} alt="Prototype screen 3"
          style={{ width: "100%", display: "block", borderRadius: 16 }} />
      </div>

      {/* ══ 13. VISUAL DESIGN & PROTOTYPE HEADING ══════════════ */}
      <div style={{ background: "#fff", padding: "3rem 5% 1rem" }}>
        <H size="clamp(1.8rem,4vw,3.5rem)">Visual Design &amp; Prototype</H>
      </div>

      {/* ══ 14. 1.mov — alone ══════════════════════════════════ */}
      <div style={{ background: "#fff", padding: "2.5rem 5%" }}>
        <video src={asset("/image/equallens/1.mov")} autoPlay loop muted playsInline
          style={{ width: "100%", display: "block", borderRadius: 16, maxHeight: "80vh", objectFit: "cover" }} />
      </div>

      {/* ══ 15. 2.1 + 2.2 — side by side with captions ════════ */}
      <div style={{ background: "#fff", display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "2rem", padding: "2rem 5%" }}>
        <div>
          <video src={asset("/image/equallens/2.1.mov")} autoPlay loop muted playsInline
            style={{ width: "100%", display: "block", borderRadius: 16 }} />
          <div style={{ fontFamily: font, fontWeight: 600, fontSize: "clamp(0.9rem,1.5vw,1.1rem)",
            color: "#000", paddingTop: "1rem" }}>Memory &amp; Engagement</div>
        </div>
        <div>
          <video src={asset("/image/equallens/2.2.mov")} autoPlay loop muted playsInline
            style={{ width: "100%", display: "block", borderRadius: 16 }} />
          <div style={{ fontFamily: font, fontWeight: 600, fontSize: "clamp(0.9rem,1.5vw,1.1rem)",
            color: "#000", paddingTop: "1rem" }}>Real-Time Bias Awareness</div>
        </div>
      </div>

      {/* ══ 16. 2.3 + 2.4 — side by side, caption on right ════ */}
      <div style={{ background: "#fff", display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "2rem", padding: "2rem 5%" }}>
        <div>
          <video src={asset("/image/equallens/2.3.mov")} autoPlay loop muted playsInline
            style={{ width: "100%", display: "block", borderRadius: 16 }} />
        </div>
        <div>
          <video src={asset("/image/equallens/2.4.mov")} autoPlay loop muted playsInline
            style={{ width: "100%", display: "block", borderRadius: 16 }} />
          <div style={{ fontFamily: font, fontWeight: 600, fontSize: "clamp(0.9rem,1.5vw,1.1rem)",
            color: "#000", paddingTop: "1rem" }}>Conversational Support</div>
        </div>
      </div>

      {/* ══ 17. 2.5 + 2.6 — side by side, caption on right ════ */}
      <div style={{ background: "#fff", display: "flex", gap: "2rem", padding: "2rem 5% 3rem",
        alignItems: "flex-start" }}>
        <div style={{ flex: 1, marginTop: "-10%" }}>
          <img src={asset("/image/equallens/2.5.png")} alt="Post-Interaction UI"
            style={{ width: "100%", display: "block", objectFit: "contain", borderRadius: 16 }} />
        </div>
        <div style={{ flex: 1 }}>
          <video src={asset("/image/equallens/2.6.mov")} autoPlay loop muted playsInline
            style={{ width: "100%", display: "block", borderRadius: 16 }} />
          <div style={{ fontFamily: font, fontWeight: 600, fontSize: "clamp(0.9rem,1.5vw,1.1rem)",
            color: "#000", paddingTop: "1rem" }}>Post-Interaction Insights</div>
        </div>
      </div>

      {/* ══ 18. TESTING ITERATION ══════════════════════════════ */}
      <Wrap bg="#fff" py="5rem">
        <H size="clamp(1.8rem,4vw,3.5rem)">Testing Iteration</H>
        <div style={{ marginTop: "3rem", display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "1.5rem" }}>
          {[
            { title: "Purpose", body: "Tested the AR bias-awareness prototype to see if it helps professionals maintain balanced engagement and receive actionable feedback." },
            { title: "Participants", body: "2 professionals (1 consultant, 1 engineer) with daily customer-facing roles." },
            { title: "Prototype Features", body: "Eye-tracking visualization · Conversation prompts · Name reminder overlay" },
            { title: "Iteration Directions", body: "Simplify UI with subtle cues · Add post-session summary dashboard · Explore haptic/auditory alternatives to preserve eye contact" },
          ].map(item => (
            <div key={item.title} style={{ background: "#F8EAF4", borderRadius: 16, padding: "2rem" }}>
              <div style={{ fontFamily: font, fontWeight: 700, fontSize: "1rem",
                color: "#101010", marginBottom: "0.75rem" }}>{item.title}</div>
              <P size="0.95rem" color="#333">{item.body}</P>
            </div>
          ))}
        </div>
      </Wrap>

      {/* ══ 19. NEXT STEPS (black) ══════════════════════════════ */}
      <Wrap bg="#000" py="6rem">
        <H color="#fff" size="clamp(1.8rem,4vw,3.5rem)">Next Steps</H>
        <div style={{ marginTop: "2.5rem", maxWidth: 1000 }}>
          <P color="#F9F9F9" size="clamp(1rem,1.8vw,1.3rem)">
            Moving forward, we plan to refine the user interface to make cues less intrusive and more
            natural within conversations. A lightweight post-session dashboard will be developed to help
            users reflect on their engagement patterns over time. To preserve eye contact and
            professionalism, we will also explore alternative feedback modes such as haptic or auditory
            cues. In addition, we aim to expand testing with a larger and more diverse group of
            professionals to validate the tool across different industries. Finally, we will move toward
            building a high-fidelity AR prototype to better simulate real-world use.
          </P>
        </div>
      </Wrap>

      {/* ══ FOOTER NAV ══════════════════════════════════════════ */}
      <div style={{ padding: "3rem 5%", display: "flex", justifyContent: "space-between",
        alignItems: "center", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <button onClick={goBack} style={{
          fontFamily: font, fontWeight: 600, fontSize: "1rem",
          background: "none", border: "2px solid #101010", color: "#101010",
          padding: "0.65rem 1.5rem", borderRadius: 40, cursor: "pointer",
        }}>← All Work</button>
        <div style={{ fontFamily: font, fontWeight: 300, fontSize: "0.9rem", color: "#888" }}>
          Equal Lens · UX Case Study
        </div>
      </div>

    </div>
  );
}
