import type { NextPage } from "next";
import Main from "../components/main";
import Possibilidades from "../components/Possibilidades/Possibilidades";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
export default function Home() {
  return (
    <div>
      <Header />
      <Possibilidades />
      <Footer />
    </div>
  );
}
