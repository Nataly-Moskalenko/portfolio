import css from './Skills.module.css';

export default function Skills() {
  return (
    <div className={css.skills}>
      <div className={css.skillsDescription}>
        <div>
          <h1 className={css.skillsTitle}>Tech Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS/Sass</li>
            <li>Responsive Design</li>
            <li>Javascript</li>
            <li>React.js</li>
          </ul>
        </div>
        <div>
          <h1 className={css.skillsTitle}>Soft Skills</h1>
          <ul>
            <li>Team work</li>
            <li>Communication</li>
            <li>Time management</li>
            <li>Analytical thinking</li>
          </ul>
        </div>
      </div>
      <button className={css.skillsButton}>
        <a
          className={css.skillsLink}
          href="https://drive.google.com/file/d/11YSRGboep4f1LNCS6N98BPAlrWmBYYa2/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to my CV
        </a>
      </button>
    </div>
  );
}
