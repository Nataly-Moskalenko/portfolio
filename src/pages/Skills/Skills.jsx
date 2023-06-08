import css from './Skills.module.css';

export default function Skills() {
  return (
    <div className={css.skills}>
      <div className={css.skillsDescription}>
        <div>
          <h1>Tech Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h1>Soft Skills</h1>
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
          href="https://drive.google.com/file/d/11YSRGboep4f1LNCS6N98BPAlrWmBYYa2/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          My resume
        </a>
      </button>
    </div>
  );
}
