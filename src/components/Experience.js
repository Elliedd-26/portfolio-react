import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

const fmt = (s) => (s && String(s).trim()) || ""; // 简单格式化

export default function Experience() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API}/api/experiences`);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const json = await r.json();
        setItems(Array.isArray(json) ? json : []);
      } catch (e) {
        setError(e.message || "Failed to load experiences");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Where I’ve been building cool stuff</p>

        {loading && <p>Loading…</p>}
        {error && <p>Oops: {error}</p>}

        {!loading && !error && (
          <div className="timeline">
            {items.map((e, idx) => {
              const side = idx % 2 === 0 ? "left" : "right";
              const start = fmt(e.startDate) || "—";
              const end = fmt(e.endDate) || "Present";

              return (
                <div className={`timeline-item ${side}`} key={e._id || e.title}>
                  <div className="timeline-content">
                    <h3 className="experience-title">{e.title}</h3>
                    {e.company && <p className="experience-company">{e.company}</p>}
                    {(start || end) && (
                      <p className="experience-date">
                        {start} — {end}
                      </p>
                    )}
                    {e.description && <p className="experience-description">{e.description}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
