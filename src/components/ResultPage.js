import "../styles/Answer.module.css";
import Nav from "./Nav";
import QuestionAnalysis from "./QuestionAnalysis";
import Result from "./Result";

export default function ResultPage() {
  return (
    <>
      <Nav />
      <Result />
      <QuestionAnalysis />
    </>
  );
}
