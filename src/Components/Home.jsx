import React from "react"
import Github from "../assets/github.png"
import Linkedin from "../assets/linkedin.png"
import * as S from "./Style.jsx"
function Home() {
    return (
      <S.Home>
        <S.Perfil>
            {/* colocar uma imagem */}
            <h2>teste</h2>
            <S.RedesSociais>
                <img src={Github} alt="" />
                <img src={Linkedin} alt="" />
            </S.RedesSociais>
        </S.Perfil>
       <S.Apresentacao>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione, sint culpa porro alias ullam nobis est id nam, ut vel accusantium odit commodi excepturi quibusdam fugiat, sapiente eveniet mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi accusantium maxime odio molestiae dolor delectus, ipsam placeat assumenda. Sit libero fugiat deserunt perferendis alias mollitia aliquid consequuntur aut eos nostrum.</p>
       </S.Apresentacao>
      </S.Home>
    )
  }
  
  export default Home