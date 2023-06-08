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
            <li className={css.skillsItem}>Responsive Design</li>
            <li className={css.skillsItem}>Javascript</li>
            <li className={css.skillsItem}>React.js</li>
          </ul>
        </div>
        <div>
          <h1 className={css.skillsTitle}>Soft Skills</h1>
          <ul>
            <li className={css.skillsItem}>Team work</li>
            <li className={css.skillsItem}>Communication</li>
            <li className={css.skillsItem}>Time management</li>
            <li className={css.skillsItem}>Analytical thinking</li>
          </ul>
        </div>
      </div>
      {/* <button className={css.skillsButton}> */}
      <a
        className={css.skillsLink}
        href="https://drive.google.com/file/d/1BkXYQ0cije63Bkh6EaXp4tL3DApZgDkx/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to my CV
      </a>
      {/* </button> */}
    </div>
  );
}
