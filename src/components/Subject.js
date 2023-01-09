import { Link } from "react-router-dom";
import classes from "../styles/Subject.module.css";
export default function Subject({ cover, title }) {
  return (
    <Link to="/questions">
      <div className={classes.subject}>
        <img src={cover} alt="Artificial Inteligience" />
        <h3>{title}</h3>
        <div className={classes.ques}>
          <p>10 Questions</p>
          <p>Score: Not taken yet</p>
        </div>
      </div>
    </Link>
  );
}
