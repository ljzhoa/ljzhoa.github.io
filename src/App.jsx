import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import { siteData } from './data';

function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="site-shell">
      <Navbar />
      <ThemeToggle theme={theme} onToggle={() => setTheme((value) => (value === 'light' ? 'dark' : 'light'))} />

      <main className="layout">
        <Sidebar />

        <div className="content">
          <Section id={siteData.about.id} eyebrow={siteData.about.eyebrow} className="hero-card">
            <h2 className="hero-title">
              {siteData.about.headline.before}{' '}
              <span>{siteData.about.headline.highlight}</span>
              {siteData.about.headline.after}
            </h2>
            <div className="hero-copy">
              <p>
                I am {siteData.profile.nameEnglish}, an undergraduate student in Statistics and Data Science at{' '}
                <strong className="inline-institution">
                  {siteData.profile.institution}
                </strong>.
              </p>
              {siteData.about.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="focus-row" aria-label="Research focus">
              <span>LLM Serving</span>
              <span>Efficient Model</span>
            </div>
          </Section>

          <Section id={siteData.updates.id} title={siteData.updates.title}>
            <div className="timeline updates-timeline">
              {siteData.updates.items.map((update) => (
                <article className="timeline-item" key={`${update.date}-${update.content}`}>
                  <span className="timeline-dot" />
                  <div className="timeline-content">
                    <time>{update.date}</time>
                    {update.href ? (
                      <a href={update.href} target="_blank" rel="noreferrer">
                        {update.content} <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ) : <p>{update.content}</p>}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id={siteData.education.id} title={siteData.education.title}>
            {siteData.education.items.map((education) => (
              <article className="education" key={education.university}>
                <div className="section-row">
                  <div>
                    <h3>{education.university}</h3>
                    <p className="muted">{education.location}</p>
                  </div>
                  <span className="date-pill">{education.period}</span>
                </div>
                <p className="degree">{education.degree}</p>
                <div className="detail-grid">
                  {education.details.map((detail) => (
                    <div className="detail-card" key={detail.label}>
                      <span>{detail.label}</span>
                      <p>{detail.value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </Section>

          <Section id={siteData.research.id} title={siteData.research.title}>
            <div className="research-list">
              {siteData.research.items.map((item) => (
                <article className="research-item" key={item.institution}>
                  <span className="research-marker" />
                  <div className="section-row research-heading">
                    <div>
                      <p className="project-label">{item.project}</p>
                      <h3>{item.institution}</h3>
                      <p className="role">{item.role}</p>
                    </div>
                    <div className="research-meta">
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          <Section id={siteData.publications.id} title={siteData.publications.title}>
            <div className="publication-list">
              {siteData.publications.items.map((publication, index) => (
                <article className="publication" key={publication.title}>
                  <span className="publication-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="publication-topline">
                      {publication.href ? (
                        <a className="publication-title" href={publication.href} target="_blank" rel="noreferrer">
                          {publication.title} <ArrowUpRight size={17} aria-hidden="true" />
                        </a>
                      ) : <h3 className="publication-title">{publication.title}</h3>}
                      <span className="status-pill">{publication.venue}</span>
                    </div>
                    <p className="authors">
                      {publication.authors.split('J. Lian').map((part, index, parts) => (
                        <span key={`${publication.title}-author-${index}`}>
                          {part}
                          {index < parts.length - 1 && <strong>J. Lian</strong>}
                        </span>
                      ))}
                    </p>
                    <div className="publication-footer">
                      <span>{publication.note}</span>
                      {publication.links.map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id={siteData.awards.id} title={siteData.awards.title}>
            <div className="award-list">
              {siteData.awards.items.map((award) => (
                <article className="award" key={award.name}>
                  <h3>{award.name}</h3>
                  <span>{award.year}</span>
                </article>
              ))}
            </div>
          </Section>

          <Section id={siteData.more.id} title={siteData.more.title}>
            <p className="more-intro">{siteData.more.intro}</p>
            {siteData.more.groups.length > 0 && (
              <div className="more-grid">
                {siteData.more.groups.map((group) => (
                  <article className="more-card" key={group.label}>
                    <h3>{group.label}</h3>
                    <div className="tag-list">
                      {group.items.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </Section>
        </div>
      </main>

      <footer>© {new Date().getFullYear()} {siteData.profile.nameEnglish}. Built with React.</footer>
    </div>
  );
}

export default App;
