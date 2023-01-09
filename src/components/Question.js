import classes from "../styles/Question.module.css";
import Option from "./Option";
export default function Question() {
  return (
    <div className={classes.question}>
      <h2>
        Which of the following standard algorithms is not Dynamic Programming
        based?
      </h2>
      <p>Question can have multiple answer.</p>
      <hr />
      <Option value="Bellman-Ford Algorithm for single source shortest path" />
      <Option value="Floyd Warshall Algorithm for all pairs shortest paths" />
      <Option value="0-1 Knapsackproblem" />
      <Option value="Prim's Minimum Spanning Tree" />
    </div>
  );
}
