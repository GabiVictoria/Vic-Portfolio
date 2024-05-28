import React from "react"
import * as S from "./Style.jsx"
import { MaquinaDeEscrever } from "../Components/MaquinaDeEscrever";

function Sobre() {
  return (
    <S.Sobre>

      <S.Introducao>
        <p><MaquinaDeEscrever text="Estudante de informática com conhecimentos em linguagens de programação, banco de dados e desenvolvimento front e back-end. Habilidade em resolução de problemas e aprendizagem rápida. Busco oportunidades para aplicar meu conhecimento em uma empresa de tecnologia que me proporcione um crescimento de carreira." delay={400} esconderCursor /></p>
      </S.Introducao>

      <S.Estudos>
        
      </S.Estudos>

      <S.Hobbies>

      </S.Hobbies>

    </S.Sobre>
  )
}

export default Sobre