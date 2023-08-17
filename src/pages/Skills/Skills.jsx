import css from './Skills.module.css';

export default function Skills() {
  return (
    <div className={css.skills}>
      <div className={css.skillsDescription}>
        <div>
          <h1 className={css.skillsTitle}>Tech Skills</h1>
          <ul>
            <li className={css.skillsItem}>HTML</li>
            <li className={css.skillsItem}>CSS/SASS</li>
            <li className={css.skillsItem}>Javascript</li>
            <li className={css.skillsItem}>React</li>
            <li className={css.skillsItem}>Node.js</li>
            <li className={css.skillsItem}>English - Intermediate</li>
          </ul>
        </div>
        <div>
          <h1 className={css.skillsTitle}>Soft Skills</h1>
          <ul>
            <li className={css.skillsItem}>Team work</li>
            <li className={css.skillsItem}>Communication</li>
            <li className={css.skillsItem}>Time management</li>
            <li className={css.skillsItem}>Analytical thinking</li>
            <li className={css.skillsItem}>Attention to details</li>
          </ul>
        </div>
      </div>
      <div className={css.skillsDescr}>
        <a
          className={css.skillsLink}
          href="https://drive.google.com/file/d/1LfzXFzsvRGp94j1bGsG-2lE2fdAWn9fC/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to my CV
        </a>
      </div>
      <div>
        <a
          className={css.skillsLink}
          href="https://drive.google.com/file/d/1KDjnfCKdie6Gc_Ek5IkA8n8rcJ7Wdxxe/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to my Sertificate
        </a>
      </div>
    </div>
  );
}
