import * as S from "./HeaderStyle";
import Image from "next/image";
import LivroCinza from "../../public/reding_grey.png";
import SettingsImage from "../../public/settings_blue.png";
export default function Header() {
  return (
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
    </S.Header>
  );
}
