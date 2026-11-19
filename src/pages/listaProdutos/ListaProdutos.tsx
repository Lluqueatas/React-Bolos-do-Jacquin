import './ListaProdutos.css'
import legrand from '../../assets/img/produtos/le_grand_chocolat.png'
import iconeUser from '../../assets/icones/user.svg'
import icone from '../../assets/icones/star.svg'
import { Link, useSearchParams } from 'react-router-dom'
import Card from '../../components/card/Card'
import { use, useEffect, useState } from 'react'
import type { Produto } from '../../types/Produtos'
import produtoService from '../../services/produtoService'

function ListaProdutos (){
    const[produtos, setProdutos] = useState<Produto[]>([]);
    const[erro, setErro] = useState ('');
    const[carregando, setCarregando]= useState (true);
    const[parametros] = useSearchParams ();
    const busca = (parametros.get('q') ?? '').toLocaleLowerCase('pt-BR');
    const categoria = Number (parametros.get('categoria'))

    useEffect(() => {
      //Promise.call
      produtoService.listar()
      .then(lista => {setProdutos(lista), console.log(lista)})
      .catch(() => setErro("Não foi possível carregar os produtos!"))
      .finally(() => setCarregando (false))
    }, [])

      const visiveis = produtos.filter(produto =>
        produto.ativo &&
        (!categoria || produto.categoriaIds.includes(categoria)) &&
        (!busca || `${produto.nome} ${produto.descricaoCurta}` .toLocaleLowerCase ('pt-BR').includes(busca))
      )

    return(
        <>
            <main>
  <section className="prod_banner" />
  <section className="container prod_container">
    <div className="box_h2">
      <h1>Nossos Bolos</h1>
      <span>Nos Gâteaux</span>
      <hr />
    </div>
    {carregando && <p>Carregando produtos...</p>}
    {!carregando && !erro && produtos.length === 0 && <p>Nenhum produto encontrado.</p>}
    <div className="prod_cards">
      {visiveis.map(produto => {
        return <Card
        id={produto.id}
        key={produto.id}
        legrand={`http://localhost:3000${produto.imagem}`}
        nome={produto.nome}
        descrição={produto.descricaoCurta}
        valor={produto.precoPorKg}
        quantidadeAvaliacoes={10}
        nota={9.5}
      />})}
    </div>
  </section>
            </main>
        </>
    )
}

export default ListaProdutos;