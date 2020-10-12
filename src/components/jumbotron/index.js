import React from 'react'
import {Container, Inner} from './styles/jumbotron';

export default function Jumbotron( { children, direction = 'row', ...restProps } ) {          // user can pass anything. If you pass object it will apply to the first that comes in 
    return (
    <Inner direction={direction}>
        <p> Hello again! </p>
    </Inner>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
return <Container {...restProps}> {children} </Container>; 
}