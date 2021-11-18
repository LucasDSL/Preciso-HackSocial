import * as S from "./FooterStyle";
import Image from "next/image";
import imgSrc from "../../public/github.png";

export default function Footer() {
  return (
    <S.Footer>
      <a href="https://github.com/LucasDSL/Preciso-HackSocial">
        <div>
          <Image src={imgSrc} alt="github-logo" layout="intrinsic" />
        </div>
        <p>Preciso 2021 - Desenvolvido por JS Mental ©</p>
      </a>
    </S.Footer>
  );
}
