import Nav from "./Nav";
import Subjects from "./Subjects";

export default function HomePage() {
  return (
    <>
      <Nav link="/login" name="Login" />
      <Subjects />
    </>
  );
}
