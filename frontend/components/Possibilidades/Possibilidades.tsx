import Image from "next/image";
import * as S from "./styles";
import Card from './Card'
import srcImg from "../../public/filter.png";
import { useState } from "react";
export default function Possibilidades() {
  return (
    <S.Possibilidades>
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

        <Card />

        <Card />

        <Card />

        
      </div>
    </S.Possibilidades>
  );
}
