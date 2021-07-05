import React,{useState} from 'react';
import _ from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}
var index=0;

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value[index]))

    
    const activationHandler = c => {
        console.log(`${c} has been activated.`)
    
        let guess = state.guess + c
        setState({ ...state, guess })
        if (guess.length === state.word.length) {
            if (guess === state.word && !state.completed) {
                console.log('yeah!')
                setState({ ...state, guess: '', completed: true })
            
            }else {
                console.log('reset')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            }
        }
    }

    const resetGame =() =>{
        console.log('Reset Game')
        index= Math.floor(Math.random()*5)
        setState(prepareStateFromWord(props.value[index]))
    }

    if(!state.completed){
        return (
            <div>
                <div> {state.completed?'You WIN':`Total Attemps: ${state.attempt}`} </div>
                {state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)}
            </div>
        );
    }else{
        return(
            <div>
                You WIN with {state.attempt} attempts CONGRATS
                <div>
                <button onClick={resetGame}>Reset</button>
                </div>
                
            </div>
        );
    }
    
}

