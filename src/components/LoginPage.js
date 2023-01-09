import classes from "../styles/Login.module.css";
import Nav from "./Nav";
export default function LoginPage() {
  return (
    <>
      <Nav />
      <div className={classes.main}>
        <div className={classes.login}>
          <h2>LogIn</h2>
          <form className={classes.form}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button id={classes.btn} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
