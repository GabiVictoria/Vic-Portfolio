import React from "react"
import Github from "../assets/github.png"
import Linkedin from "../assets/linkedin.png"
import Gmail from "../assets/gmail.png"
import Avatar from "../assets/avatar_comp.png"
import { useEffect } from "react";
import { MaquinaDeEscrever } from "../Components/MaquinaDeEscrever";

import * as S from "./Style.jsx"
function Home() {
    return (
      <S.Home>
        
        <S.Perfil>
        <img src={Avatar} alt="" />
          <h3>Gabrielle Victória</h3>
       <S.RedesSociais>
        <img src={Github} alt="" />
        <img src={Linkedin} alt="" />
        <img src={Gmail} alt="" />
       </S.RedesSociais>
        </S.Perfil> 
      
       <S.Apresentacao className="bg-[#080713] flex justify-center items-center h-screen w-full text-2xl">
{/* funcao de https://github.com/Marlliton/cod3r-projects/blob/main/projetos-de-artigos/maquina-de-escrever/src/pages/index.jsx*/}
        <h1 className="font-bold">
          
        <MaquinaDeEscrever text="Olá eu sou Gabrielle Victória!" esconderCursor />
          
        <MaquinaDeEscrever text="Sou uma pessoa dedicada, com habilidades para trabalho em equipe e com grande interesse e facilidade em adquirir novos conhecimentos. Além da tecnologia, também tenho interesse em astronomia, projetos e olimpíadas científicas e literatura." delay={4000} esconderCursor />
        </h1>
      </S.Apresentacao>
      </S.Home>
    )
  }
  
  export default Home