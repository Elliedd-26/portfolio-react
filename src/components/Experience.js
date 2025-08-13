import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

export default function Experience() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API}/api/experiences`); // ✅ 修正路径
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
        <p className="section-subtitle">Where I’ve worked and what I’ve done</p>

        {loading && <p>Loading…</p>}
        {error && <p>Oops: {error}</p>}

        {!loading && !error && (
          <div className="experience-list">
            {items.map((exp) => (
              <div className="experience-item" key={exp._id || exp.company}>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-dates">{exp.startDate} – {exp.endDate || "Present"}</p>
                {exp.description && <p className="experience-description">{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
