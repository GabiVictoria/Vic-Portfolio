import styled from "styled-components"

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

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 50vh;
    a:hover{
        font-size: 2.5rem;
        color: purple;
    }

}

`

//---estilização do componente inicio

export const Home = styled.main`
display: flex;
justify-content: space-between;
align-items: center;
height: 80vh;
background-color: rgba(69, 175, 214, 0.8);


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
display: flex;
justify-content: center;
align-items: center;
p{width: 80%;
}
`
//---estilização do componente sobre

export const Sobre = styled.main`
    display: flex;
    justify-content: space-evenly;
`

export const Estudos = styled.section`
border: solid red;
    display: flex;
     flex-direction: column; 
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;
    width: 30vw;
`

export const Habilidades = styled.section`
border: solid; 
height: 50vh;
width: 30vw;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

div{
    display: flex;
    align-items: center;
}

img{
    height: 7vh;
}


`
// estilização do component projetos
export const Projetos = styled.main`
background-color: rgba(69, 175, 214, 0.8);
height: 80vh;
`
export const card = styled.section`
    width: 300px;
    height: 200px;
    background-color: rgba(194, 11, 36, 0.7);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    border: radius;

  .cardHeading {
    font-size: 1.5em;
    font-weight: 600;
    color: #C6FDE7;
  }
  
  .cardDescription {
    font-size: 0.9em;
    color: #C6FDE7;
  }
  
  .cardDescription a {
    color: #C20B24;
  }
  
  .acceptButton {
    padding: 11px 20px;
    background-color: #7b57ff;
    transition-duration: .2s;
    border: none;
    color: rgb(241, 241, 241);
    cursor: pointer;
    font-weight: 600;
  }
  
  .acceptButton:hover {
    background-color: #714aff;
    transition-duration: .2s;
  }
`