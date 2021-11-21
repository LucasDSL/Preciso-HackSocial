import * as S from "./HeaderStyle";
import * as P from "./MenuMobileStyle";
import React, { useState } from "react";
import Image from "next/image";
import LivroCinza from "../../public/reding_grey.png";
import SettingsImage from "../../public/settings_blue.png";
import MenuResponsivoConteudo from "./MenuResponsivoConteudo";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <S.Header>
        <S.PrecisoWrapper>
          <p>PRECISO</p>
        </S.PrecisoWrapper>
        <S.Botoes>
          <S.VerPedidos>
            <S.LivroCinzaWrapper>
              <Image src={LivroCinza} layout="intrinsic" alt="livroCinza" />
            </S.LivroCinzaWrapper>
            <h1>Ver pedidos</h1>
          </S.VerPedidos>
          <S.Possibilidades>
            <S.SettingsWrapper>
              <Image src={SettingsImage} layout="intrinsic" alt="settings" />
            </S.SettingsWrapper>
            <h1>Possibilidades</h1>
          </S.Possibilidades>
        </S.Botoes>
        <S.Perfil>
          <S.FotoDePerfilWrapper>
            <p>JS</p>
          </S.FotoDePerfilWrapper>
          <S.NomeEProfissao>
            <h1>José da Silva</h1>
            <h2>Professor</h2>
          </S.NomeEProfissao>
        </S.Perfil>
        <P.MenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div className="one" />
          <div className="two" />
          <div className="three" />
          <div className="four" />
          <div className="five" />
        </P.MenuToggle>
      </S.Header>
      <P.MenuAberto isOpen={isOpen}>
        <MenuResponsivoConteudo texto="Sua conta" imagens3={true} />
        <MenuResponsivoConteudo
          texto="Ver pedidos"
          imagens={true}
          imagens2={true}
          imagens3={true}
        />
        <MenuResponsivoConteudo
          texto="Possibilidades"
          imagens={true}
          imagens2={false}
          imagens3={true}
        />
      </P.MenuAberto>
    </>
  );
}
