import type { NextPage } from "next";
import Pedidos from "../components/Pedidos";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Pedido() {
  return (
    <div>
      <Header />
      <Pedidos />
      <Footer />
    </div>
  );
}
