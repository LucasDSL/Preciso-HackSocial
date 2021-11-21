import {useState} from 'react'
import Link from 'next/link';
export default function Card(){
    const [button, setButton] = useState(false);
    return(
        <div className="card">
          <p>Placa de vídeo</p>
          <p>1</p>
          <p>Alagoinhas</p>
          <p>Lucas</p>
          <button className="reserve-btn">
            <a href='/confirmar' style={{color:'white'}}>
            Reservar </a>
          </button>
        </div>
    )
}