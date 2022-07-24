import React from 'react';
import styled, {keyframes} from "styled-components";

function Home(props) {
    return (
        <div>
            <Title>Inicio</Title>
            
            <p>Esta pagina esta hecha para apoyar a solucionar problemas</p>

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