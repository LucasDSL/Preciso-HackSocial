import { StyledPodidos } from "./styles";
import Card from './Cards';

export default function Pedido() {
    return (
        <StyledPodidos>
            <h1>Veja seus pedidos</h1>

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
            
            <button id='confirm'>Confirmação</button>
        </StyledPodidos>
    )
}