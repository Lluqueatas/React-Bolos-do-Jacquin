import { Link } from 'react-router-dom';

import iconeUser from '../../assets/icones/user.svg'
import icone from '../../assets/icones/star.svg'

import './Card.css'

type CardProps ={
    id: number;
    legrand: string;
    nome: string;
    descrição: string
;   valor: number;
    quantidadeAvaliacoes: number;
    nota: number;
}

function Card({id, legrand,
    nome,
    descrição,
    valor,
    quantidadeAvaliacoes,
    nota
    } : CardProps){
        return(
            <article className="prod_card">
            <figure>
          <img
            src={legrand}
            alt="foto do produto"
            />
            </figure>
            <h2>
          <Link to={`/detalheProduto/${id}`}>{nome}</Link>
            </h2>
         <p className="prod_cards">
          {descrição}
         </p>
         <p className="card_rodape">
          <data value={valor}>R$ {valor} / kg</data>
          <span className="card_av">
            <img src={iconeUser} alt="icone de usuarios" />
            <data value={quantidadeAvaliacoes}>{quantidadeAvaliacoes}</data>
            <img src={icone} alt="icone de estrela" />
            <data value={nota}>{nota}</data>
          </span>
         </p>
        </article>
      )
}

export default Card;