import styled from 'styled-components/macro';  // macro will give the name of the component in the dev tools. Instead of some random number 

export const Inner = styled.div`     /*  h1 div or else */
    display: flex;                
    align-items: center;        
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Container = styled.div``;  