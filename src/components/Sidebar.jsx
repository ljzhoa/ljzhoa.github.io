import { FileDown, Mail } from 'lucide-react';
import profileImage from '../../images/profile.jpg';
import cvFile from '../assets/Jinzhao_Lian_CV.pdf?url';
import { siteData } from '../data';

export default function Sidebar() {
  const { profile } = siteData;
  const links = [
    {
      label: profile.cvLabel,
      href: cvFile,
      icon: FileDown,
      download: profile.cvFilename || 'cv of Jinzhao Lian.pdf',
    },
  ].filter(Boolean);

  return (
    <aside className="sidebar">
      <div className="portrait-wrap">
        <img src={profileImage} alt={`Portrait of ${profile.nameEnglish}`} className="portrait" />
      </div>

      <div className="identity">
        <p className="name-chinese">{profile.nameChinese}</p>
        <h1>{profile.nameEnglish}</h1>
        <p className="identity-school">{profile.institution}</p>
      </div>

      <div className="sidebar-links">
        <div className="sidebar-contact">
          <span className="link-icon"><Mail size={19} strokeWidth={1.9} /></span>
          <span>{profile.email}</span>
        </div>
        {links.map(({ label, href, icon: Icon, external, download }) => (
          <a
            key={label}
            href={href}
            className="sidebar-link"
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            download={download || undefined}
          >
            <span className="link-icon"><Icon size={19} strokeWidth={1.9} /></span>
            <span>{label}</span>
          </a>
        ))}
      </div>

      <p className="last-updated">Last updated: {profile.lastUpdated}</p>
    </aside>
  );
}
