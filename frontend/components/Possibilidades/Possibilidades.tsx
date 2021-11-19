import "./styles";
import Image from "next/image";
import * as S from "./styles";
import Card from './Card'
import srcImg from "../../public/filter.png";
import { useState } from "react";
export default function Possibilidades() {
  const [button, setButton] = useState(false);
  return (
    <S.Possibilidades background_color_btn={button}>
      <article className="possibilities-title">
        <h2>Encontre o que procura</h2>
        <button>
          <div>
            <Image src={srcImg} alt="filter image" />
          </div>
          Filtros
        </button>
      </article>

      <div className="cards-section">
        <div className="card-titles">
          <p>Tipo</p>
          <p>Quantidade</p>
          <p>Cidade</p>
          <p>Nome</p>
          <p>Status</p>
        </div>

        <Card />

        <div className="card">
          <p>Placa de vídeo</p>
          <p>1</p>
          <p>Alagoinhas</p>
          <p>Lucas</p>
          <button className="reserve-btn">
            {button ? "Reservar" : "Indisponível"}
          </button>
        </div>

        <div className="card">
          <p>Placa de vídeo</p>
          <p>1</p>
          <p>Alagoinhas</p>
          <p>Lucas</p>
          <button className="reserve-btn">
            {button ? "Reservar" : "Indisponível"}
          </button>
        </div>
      </div>
    </S.Possibilidades>
  );
}
