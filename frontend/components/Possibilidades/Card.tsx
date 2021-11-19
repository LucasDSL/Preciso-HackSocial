import {useState} from 'react'
export default function Card(){
    const [button, setButton] = useState(false);
    return(
        <div className="card">
          <p>Placa de vídeo</p>
          <p>1</p>
          <p>Alagoinhas</p>
          <p>Lucas</p>
          <button className="reserve-btn" onClick={() => setButton(!button)}>
            {button ? "Reservar" : "Indisponível"}
          </button>
        </div>
    )
}