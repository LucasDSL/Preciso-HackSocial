import * as S from "./HeaderStyle";

export default function Header() {
  return (
    <S.Header>
      <S.PrecisoWrapper>
        <p>PRECISO</p>
      </S.PrecisoWrapper>
      <S.Botoes>
        <S.VerPedidos>
          <h1>Ver pedidos</h1>
        </S.VerPedidos>
        <S.Possibilidades>
          <h1>Possibilidades</h1>
        </S.Possibilidades>
      </S.Botoes>
      <S.Perfil>huauhasaus</S.Perfil>
    </S.Header>
  );
}
