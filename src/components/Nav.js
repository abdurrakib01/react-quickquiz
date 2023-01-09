import { Link } from "react-router-dom";
import classes from "../styles/Nav.module.css";

export default function Nav({ link, name }) {
  return (
    <nav className={classes.nav}>
      <Link to="/">
        <h2>
          <span id={classes.logo}>Q</span>uick<span id={classes.logo}>Q</span>
          uiz
        </h2>
      </Link>
      <p>
        <Link to={link}>{name}</Link>
      </p>
    </nav>
  );
}
