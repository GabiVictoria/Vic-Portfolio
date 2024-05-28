import styled from "styled-components"
import backgroundSobre from "../assets/contelacao.png";
import Space from "../assets/space-img.png"
export const Navegacao = styled.nav`
    display: flex;
    align-items: center;
    background-color: #C6FDE7;
    font-family: "Sevillana", cursive;

    img{
        height: 20vh;
    }
`

export const Lista = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 20vh;
width: 80vw;
list-style: none;
font-family: "Sevillana", cursive;

a{
     text-decoration: none;
    color: black; 
    font-size: 2rem;
}

a:hover{
color: #C20B24;
font-weight: 800;
font-size: 2.2rem
}

`

//---estilização do componente inicio

export const Home = styled.main`
display: flex;

justify-content: space-between;
align-items: center;
height: 80vh;
background: rgb(164,224,200);
background: linear-gradient(135deg, rgba(164,224,200,1) 1%, rgba(105,157,139,1) 6%, rgba(39,81,71,1) 18%, rgba(24,65,56,1) 24%, rgba(4,43,36,0.9613095238095238) 34%, rgba(19,37,38,0.9781162464985994) 66%, rgba(75,13,48,0.9220938375350141) 85%, rgba(194,11,36,0.8772759103641457) 100%);
background-size:100% 100%;


@media(min-width: 320px) and (max-width: 768px){
    height: 100vh;


    img{
        width: 70vw;
    }

    h2,p{
        font-size: 2rem;
        text-align: center;
    }
}
`
export const Perfil = styled.section`
display: flex;
width: 40vw;
height: 80vh;
color: #C6FDE7;
align-items: center; 
justify-content: center; 
flex-direction: column;
img{

    height: 80%;
}
`

export const RedesSociais = styled.div`
width: 12vw;
margin-top: 2vh;
display: flex;
justify-content: space-evenly;
align-items: center;
img{
    width: 3vw;
}

@media(min-width: 320px) and (max-width: 768px){

    width: 80vw;
    justify-content: space-evenly;
    img{
        width: 15vw;
    }
}

`
export const Apresentacao = styled.section`
width: 60vw;
height: 80vh;
color: #C6FDE7;
display: flex;
justify-content: center;
align-items: center;
h1{width: 80%;
}
`
//---estilização do componente sobre

export const Sobre = styled.main`
    
`
export const Introducao = styled.section`
height: 80vh;
// width: 100%
background-image: url(${Space});
background-repeat: no-repeat;
background-size: 100vw 80vh;
p{
    width: 45vw;
    color: #8DF7E5;
    font-size: 2em;
    font-weight: 600;
    position : relative;
    top: 30vh;
    left: 2.5vw;
}
`

export const Estudos = styled.section`
height: 100vh;
background-image: url(${backgroundSobre});
background-repeat: no-repeat;
background-size: cover;

`

export const Hobbies = styled.section`

`

// estilização do component projetos
// altura cardimg =90px largura=250px
export const Projetos = styled.main`
background: rgb(164,224,200);
background: linear-gradient(135deg, rgba(164,224,200,1) 1%, rgba(105,157,139,1) 6%, rgba(39,81,71,1) 18%, rgba(24,65,56,1) 24%, rgba(4,43,36,0.9613095238095238) 34%, rgba(19,37,38,0.9781162464985994) 66%, rgba(75,13,48,0.9220938375350141) 85%, rgba(194,11,36,0.8772759103641457) 100%);
background-size:100% 100%;
display: flex;

height: 80vh;
`
export const card = styled.section`
    width: 300px;
    height: 300px;
    background-color: rgba(194, 11, 36, 0.7);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    margin: 20px;
    border-radius: .2rem;

  .cardHeading {
    font-size: 1.5em;
    font-weight: 600;
    color: #C6FDE7;
  }
  
  .cardimg {
    background-color: #ffcaa6;
    height: 40%;
    width: 100%;
    border-radius: .2rem;
    transition: .3s ease;
   }

  .cardDescription {
    font-size: 1em;
    color: #C6FDE7;
  }
  
  .cardDescription a {
    color: #76ABB0;
    font-size: 0.9em;
  }
  
  .acceptButton {
    padding: 11px 20px;
    background-color: #00907A;
    transition-duration: .2s;
    border: none;
    color: rgb(241, 241, 241);
    cursor: pointer;
    font-weight: 600;
  }
  
  .acceptButton:hover {
    background-color: #007261;
    transition-duration: .2s;
  }
`
