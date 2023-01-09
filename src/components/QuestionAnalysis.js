import classes from "../styles/QuestionAnalysis.module.css";
export default function QuestionAnalysis() {
  return (
    <div className={classes.question}>
      <h2>
        Which of the following standard algorithms is not Dynamic Programming
        based?
      </h2>
      <p>Question can have multiple answer.</p>
      <hr />
      <div className={classes.option}>
        <p>Bellman-Ford Algorithm for single source shortest path</p>
      </div>
      <div className={classes.option} id={classes.wrong}>
        <p>Floyd Warshall Algorithm for all pairs shortest paths</p>
        <p id={classes.pp}>your answer</p>
      </div>
      <div className={classes.option}>
        <p>0-1 Knapsack problem</p>
      </div>
      <div className={classes.option} id={classes.correct}>
        <p>Prim's Minimum Spanning Tree</p>
        <p id={classes.pp}>correct answer</p>
      </div>
    </div>
  );
}
