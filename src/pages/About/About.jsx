import myPhoto from '../../images/photo_paint.jpg';
import css from './About.module.css';

export default function About() {
  return (
    <div className={css.about}>
      <div className={css.aboutDescription}>
        <h1>Hi! I am Nataliia!</h1>
        <p>I am a Junior Front End developer with knowledge of HTML, CSS, JavaScript, React.</p>
        <p>I have an analytical thinking, which allows me to effectively solve complex tasks.</p>
        <p>
          I know how to communicate with different people and I know how to work effectively both
          individually and in a team.
        </p>
        <p>I am open to offers and work.</p>
      </div>
      <img className={css.aboutPhoto} src={myPhoto} alt="My_photo" width="260" height="300" />
    </div>
  );
}
