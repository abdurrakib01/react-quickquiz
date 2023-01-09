import ai from "../assets/images/ai.jpg";
import al from "../assets/images/al.jpeg";
import cd from "../assets/images/cd.webp";
import cn from "../assets/images/cn.jpg";
import db from "../assets/images/db.jpeg";
import ml from "../assets/images/ml.png";
import ps from "../assets/images/ps.jpg";
import ri from "../assets/images/ri.jpg";
import classes from "../styles/Subjects.module.css";
import Subject from "./Subject";

export default function Subjects() {
  return (
    <main>
      <div className={classes.subjects}>
        <Subject cover={al} title="Data Structure and Algorithms" />
        <Subject cover={ml} title="Data Mining and Machine Learning" />
        <Subject cover={ai} title="Artificial Intelegence" />
        <Subject cover={db} title="Database Management System" />
        <Subject cover={cd} title="Compiler Design" />
        <Subject cover={ps} title="Problem Solving in Programming" />
        <Subject cover={cn} title="Computer Networks" />
        <Subject cover={ri} title="Research and Innovation" />
      </div>
    </main>
  );
}
