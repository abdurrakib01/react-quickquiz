import classes from "../styles/Option.module.css";
import CheckBox from "./CheckBox";
export default function Option({ value }) {
  return (
    <div className={classes.option}>
      <p>
        <CheckBox question={value} /> {value}
      </p>
    </div>
  );
}
