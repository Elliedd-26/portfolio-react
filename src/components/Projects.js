import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

// 默认图：按项目名/关键词给一张 Unsplash
const getDefaultImage = (title) =>
  `https://source.unsplash.com/800x600/?${encodeURIComponent(title || "ui,design")}`;

export default function Projects() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API}/api/projects`);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const json = await r.json();
        setItems(Array.isArray(json) ? json : []);
      } catch (e) {
        setError(e.message || "Failed to load projects");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected work I’m proud of</p>

        {loading && <p>Loading…</p>}
        {error && <p>Oops: {error}</p>}

        {!loading && !error && (
          <div className="projects-grid">
            {items.map((p) => {
              const link = p.link || p.url;                // 兼容两种字段
              const tech = Array.isArray(p.languages) ? p.languages : [];
              const image = p.screenshot || getDefaultImage(p.title);

              return (
                <article className="project-card" key={p._id || p.title}>
                  <div className="project-image">
                    <img src={image} alt={p.title} />
                    <div className="project-overlay">
                      {link && (
                        <a className="project-link" href={link} target="_blank" rel="noreferrer">
                          Visit →
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{p.title}</h3>
                    {p.description && <p className="project-description">{p.description}</p>}

                    {tech.length > 0 && (
                      <div className="project-tech">
                        {tech.map((t, i) => (
                          <span className="tech-tag" key={`${p._id || p.title}-tech-${i}`}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
