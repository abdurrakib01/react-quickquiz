import classes from "../styles/Result.module.css";
export default function Result() {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.result}>
          <h2 id={classes.h2}>
            Your Result is<span>5 out of 10</span>
          </h2>
        </div>
      </div>
      <div className={classes.result_ana}>
        <h2>Question Analysis: </h2>
        <hr className={classes.hr} />
      </div>
    </>
  );
}
