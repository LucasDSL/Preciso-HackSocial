import { StyledMain } from './styles'

export default function Main() {
    return(
    <StyledMain>
        <h1>Confirmar Pedido</h1>
        <div className='alignInputs'>
            <label>Nome do constribuidor </label>
            <input type='text' placeholder=''/>
            <label>Reservado por </label>
            <input type='' placeholder=''/>
        </div>

        <div className='alignInputs'>
            <label>Origem</label>
            <input type='text' placeholder='' />
            <label>Destino</label>
            <input type='text' placeholder='' />
        </div>

        <div className='alignInputs'>
            <label>Componente</label>
            <input type='text' />
            <label>Nome do componente </label>
            <input type='text' />
        </div>

        <div className='alignInputs'>
            <label>Quantidade</label>
            <input type='text' />
            <div className='alignButtons'>
                <button id='cancel'>Cancelar</button>
                <button id='send'>Enviar</button>
            </div>
        </div>
        
    </StyledMain>
    )
}