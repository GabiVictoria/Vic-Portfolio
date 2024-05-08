import React from "react"
import Fantastika from "../assets/fantastika.png"
import * as S from "./Style.jsx"
function Projetos(){
  return(
  <S.Projetos>
  <S.card >
  <h3 class="cardHeading">Fantastika</h3>
  <img class="cardimg" src={Fantastika} alt="" />
  <p class="cardDescription">Site de divulgação de um pet-shop, criado utilizando HTML e CSS. <a href="https://github.com/GabiVictoria/Fantastika" target="_blank"> Código do projeto.</a></p>
  <a href=" https://gabivictoria.github.io/Fantastika/" target="_blank"><button class="acceptButton">Acessar</button></a>
  </S.card>
  <S.card >
  <h3 class="cardHeading">Nix</h3>
  <img class="cardimg"  src="https://tm.ibxk.com.br/2023/12/01/01161554600322.jpg" />
  <p class="cardDescription">Site de divulgação sobre o sistema solar <a href="https://github.com/GabiVictoria/Nix" target="_blank"> Código do projeto.</a></p>
  <a href=" #" target="_blank"><button class="acceptButton">Acessar</button></a>
  </S.card>
  </S.Projetos> 
  
  )
} 

export default Projetos