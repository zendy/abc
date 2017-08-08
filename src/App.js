import React, { Component } from 'react';
import styled from 'styled-components';

import Alphabet from './components/Alphabet';
import Button from './components/Button';

const Wrapper = styled.div`
    bottom: 0;
	display: flex;
	justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`;

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.nextCharacter = this.nextCharacter.bind(this);
        this.randomCharacter = this.randomCharacter.bind(this);

        this.state = {
            activeCharacter: this.randomCharacter(),
        };
    }

    randomCharacter() {
        return characters[Math.floor(Math.random() * (25-0))];
    }

    nextCharacter() {
        const newActiveCharacter = this.randomCharacter();
        this.setState({
            activeCharacter: newActiveCharacter,
        });
    }

    render() {
        return (
            <Wrapper>
                <Button onClick={this.nextCharacter}><Alphabet>{this.state.activeCharacter}</Alphabet></Button>
            </Wrapper>
        );
    }
}

export default App;
