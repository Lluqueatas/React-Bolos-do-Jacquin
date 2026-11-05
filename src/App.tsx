import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import DetProduto from "./pages/detProduto/DetProduto";
import Login from "./pages/login/Login";
import AdmProdutos from "./pages/admProdutos/AdmProdutos";

export default function App(){
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<ListaProdutos/>}/>
                <Route path="/detalheProduto" element={<DetProduto/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/administraçãoProdutos" element={<AdmProdutos/>}/>
                <Route path="*"
                element={
                    <img className="ta" src="https://miro.medium.com/v2/resize:fit:852/0*Zw0l2Z5eM1VsxLhx.gif" alt="Imagem de não encontrado"/>
                }/>
            </Routes>
            <Footer/>
        </>
    )
}

import { Link } from 'react-router-dom';

function MeuComponente() {
  return (
    <div>
      <Link to="/sobre">Ir para a página Sobre</Link>
    </div>
  );
}
