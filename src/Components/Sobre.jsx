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
      <h2>Habilidades</h2>
        <S.Habilidades>
        <S.Hcard class="package">
          <div class="package2"><p class="text">JAVA</p></div>
        </S.Hcard>
        <S.Hcard class="package">
          <div class="package2"><p class="text">C</p></div>
        </S.Hcard>
        <S.Hcard class="package">
          <div class="package2"><p class="text">PYTHON</p></div>
        </S.Hcard>
        <S.Hcard class="package">
          <div class="package2"><p class="text">JavaScript</p></div>
        </S.Hcard>
        <S.Hcard class="package">
          <div class="package2"><p class="text">HTML</p></div>
        </S.Hcard>
        <S.Hcard class="package">
          <div class="package2"><p class="text">REACT</p></div>
        </S.Hcard>

        </S.Habilidades>
      </S.Estudos>

      <S.Hobbies>

      </S.Hobbies>

    </S.Sobre>
  )
}

export default Sobre