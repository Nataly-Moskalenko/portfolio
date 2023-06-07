import css from './Skills.module.css';

export default function Skills() {
  return (
    <div>
      <div className={css.skills}>
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
      <button>My resume</button>
    </div>
  );
}
