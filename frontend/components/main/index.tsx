import { StyledMain } from "./styles";

export default function Main() {
    return(
        
    <StyledMain>
        <h1>Confirmar Pedido</h1>
        <div className='alignInputs'>
            <label className='label-input'>
                <span> Nome do contribuidor </span>
            <input type='text' placeholder=''/></label>

            <label className='label-input'>
                <span>Reservado por</span>
            <input type='' placeholder=''/></label>
        </div>

        <div className='alignInputs'>
            <label className='label-input'> <span>Origem</span>
            <input type='text' placeholder='' /></label>

            <label className='label-input' >
                <span>Destino</span>
            <input type='text' placeholder='' /></label>
        </div>

        <div className='alignInputs'>
            <label className='label-input'>
                <span>Componente</span>
            <input type='text' /></label>

            <label className='label-input'>
                <span>Nome do componente </span>
            <input type='text' /></label>
        </div>

        <div className='alignInputs'>
            <label className='label-input'>
                <span>Quantidade</span>
            <input type='text' /></label>

            <div className='alignButtons'>
                <button id='cancel' type="submit">
                <a href='/' style={{color: 'white'}}>Cancelar</a>
                </button>
                <button id='send' type="reset">Enviar</button>
            </div>
        </div>
        
    </StyledMain>
  );
}
