import Image from "next/image";
import React from "react";
import * as P from "./MenuMobileStyle";
import Livro from "../../public/reding_grey.png";
import Livro2 from "../../public/reading_blue.png";
import Engrenagens from "../../public/settings_grey.png";
import Perfil from "../../public/user.png";

interface Props {
  texto: string;
  imagens?: boolean;
  imagens2?: boolean;
  imagens3: boolean;
}

export default function MenuResponsivoConteudo({
  texto,
  imagens,
  imagens2,
  imagens3,
}: Props) {
  return (
    <P.MenuResponsivoConteudo>
      {imagens ? (
        <P.ImgWrpper>
          <Image
            src={imagens2 ? Livro : Engrenagens}
            layout="intrinsic"
            alt="aaa"
          />
        </P.ImgWrpper>
      ) : (
        <P.ImgWrpper>
          <Image src={imagens3 ? Perfil : " "} layout="intrinsic" alt="asusa" />
        </P.ImgWrpper>
      )}
      <h1>{texto}</h1>
    </P.MenuResponsivoConteudo>
  );
}
