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
background-image: url("https://png.pngtree.com/thumb_back/fw800/background/20231014/pngtree-background-with-a-texture-of-light-blue-cardboard-image_13660944.png");
background-repeat: no-repeat;
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