import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import QuestionPage from "./QuestionPage";
import ResultPage from "./ResultPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/result" element={<ResultPage />} />
          <Route exact path="/questions" element={<QuestionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
