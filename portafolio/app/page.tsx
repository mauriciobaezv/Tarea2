import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Interests from "./Components/Interests/Interests";
import CV from "./Components/CV/CV";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Interests/>
      <CV/>
    </>
  );
}