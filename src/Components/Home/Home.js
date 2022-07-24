import React, { useState } from 'react';
import styled, {keyframes} from "styled-components";



function Home(props) {

    const [oscuro, setOscuro] = useState(true);

    function handleOnClick () {
        setOscuro(!oscuro);
    }

    return (
        <div>
            <Title>Inicio</Title>
            
            <p>Esta pagina esta hecha para apoyar a solucionar problemas</p>

            <p>Demonstracion de como funcionaria el Cambio de tema</p>

            <div className={"claro"}>
                Demo de cambio de color de texto y fondo
                Demo de cambio de color de texto y fondo
                Demo de cambio de color de texto y fondo
                Demo de cambio de color de texto y fondo
            </div>

            <button onClick={handleOnClick}>
                { oscuro ? "oscurecer" : "aclarecer"}
            </button>

        </div>
    );
}

const start = keyframes`
0% {
    opacity: 0;
    transform: translateX(-100px);
}

20% {
    opacity: 1;
    transform: translateY(50px);
}

40% {
    transform: translateX(100px);
}

60% {
    opacity: 0;
    transform: translateX(100px);
}

70% {
    transform: translateX(0px) translateY(-100px);
}

100% {
    opacity: 1;
    transform: translateY(0px);
}

`;

const Title = styled.h1`
    animation-name: ${start};
    animation-duration: 5s;
`;

export default Home;