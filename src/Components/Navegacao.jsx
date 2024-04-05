import React from "react"
import Home from "./Home.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import Avatar from "../assets/avatar.png"
import * as S from "./Style.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function Navegacao() {

  return (
  <BrowserRouter>
  <S.Navegacao> 
  <img src={Avatar} alt="" />
    <S.Lista>
      {/* to = para, um link para tal lugar (sobre, projetos e início / ) */}
      <li> <Link to="/"> Home </Link> </li>
      <li> <Link to="/Sobre"> Sobre </Link> </li>
      <li> <Link to="/Projetos"> Projetos </Link> </li>
    </S.Lista>
  </S.Navegacao>

<Routes> 
{/* path (caminho) : Configura os dois, link to = "/Sobre" path="Sobre" */}
 {/* element: configura para qual componente quero ir, element={<Sobre/>} */}

<Route path="/" element={ <Home /> } />
<Route path="Sobre" element = { <Sobre /> } />
<Route path="Projetos" element = { <Projetos /> } />

</Routes>

  </BrowserRouter>
  )
}

export default Navegacao