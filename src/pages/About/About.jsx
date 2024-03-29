import myPhoto from '../../images/photo_paint.jpg';
import css from './About.module.css';

export default function About() {
  return (
    <div className={css.about}>
      <div className={css.aboutDescription}>
        <p className={css.aboutTitle}>Hi! I am Nataliia!</p>
        <p className={css.aboutText}>I am a Full Stack Developer with knowledge of HTML, CSS, JavaScript, React, Node.js.</p>
        <p className={css.aboutSubtext}>I have an analytical thinking, which allows me to effectively solve complex tasks.</p>
        <p className={css.aboutDesc}>
          I know how to communicate with different people and I know how to work effectively both
          individually and in a team.
        </p>
        <p className={css.aboutDescr}>I am open to offers and work.</p>
      </div>
      <img className={css.aboutPhoto} src={myPhoto} alt="My_photo" width="260" height="300" />
    </div>
  );
}
