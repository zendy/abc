import React, { Component } from 'react';
import styled from 'styled-components';
import { knuthShuffle } from 'knuth-shuffle';

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

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
knuthShuffle(characters);

class App extends Component {
    state = {
        activeCharacter: '',
        activeMarker: 0,
    }

    nextCharacter = () => {
        const newActiveCharacter = characters[this.state.activeMarker];
        const newActiveMarker = this.state.activeMarker + 1;
        this.setState({
            activeCharacter: newActiveCharacter,
            activeMarker: newActiveMarker,
        });
    }

    componentWillMount() {
        this.nextCharacter();
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
