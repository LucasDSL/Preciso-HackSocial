import type { NextPage } from "next";

import Main from "../components/main";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
